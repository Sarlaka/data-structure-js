// 图由边的集合及顶点的集合组成。
// 边由顶点 对 (v1,v2) 定义，v1 和 v2 分别是图中的两个顶点。顶点也有权重，也称为成本。
// 如果一个 图的顶点对是有序的，则可以称之为有向图。在对有向图中的顶点对排序后，便可以在两 个顶点之间绘制一个箭头。有向图表明了顶点的流向。如果图是无序的，则称之为无序图，或无向图。

// 图中的一系列顶点构成路径，路径中所有的顶点都由边连接。路径的长度用路径中第一个顶点到最后一个顶点之间边的数量表示。
// 由指向自身的顶点组成的路径称为环，环的长度为0。
// 圈是至少有一条边的路径，且路径的第一个顶点和最后一个顶点相同。
// 无论是有向图还是 无向图，只要是没有重复边或重复顶点的圈，就是一个简单圈。
// 除了第一个和最后一个顶点以外，路径的其他顶点有重复的圈称为平凡圈。
// 如果两个顶点之间有路径，那么这两个顶点就是强连通的，反之亦然。如果有向图的所有 的顶点都是强连通的，那么这个有向图也是强连通的。

// 1. 第一步就是要创建一个 Vertex 类来保存顶点和边。
function Vertex(label) {
    this.label = label;
}

// 2.我们将表示图的边的方法称为邻接表或者邻接表数组。这种方法将边存储为由顶点的相邻顶点列表构成的数组，并以此顶点作为索引。
function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    this.edgeTo = [];
    // 用来存储已访问过的顶点
    this.marked = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
    }
    this.addEdge = addEdge;
    // this.toString = toString;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.pathTo = pathTo;
    this.hasPathTo = hashPathTo;
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
}

// 当调用这个函数并传入顶点 A 和 B 时，函数会先查找顶点 A 的邻接表，将顶点 B 添加到列 表中，然后再查找顶点 B 的邻接表，将顶点 A 加入列表。最后，这个函数会将边数加 1。
function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

// showGraph() 函数会通过打印所有顶点及其相邻顶点列表的方式来显示图
// function showGraph() {
//     for (var i = 0; i < this.vertices; ++i) {
//         var str = '';
//         str += i + "->";
//         for (var j = 0; j < this.vertices; ++j) {
//             if (this.adj[i][j] != undefined) str += this.adj[i][j] + ' ';
//         }
//         console.log(str);
//     }
// }
// 用于显示符号名字而非数字的新函数
function showGraph() {
    var visited = [];
    for (var i = 0; i < this.vertices; ++i) {
        var str = '';
        str += this.vertexList[i] + " -> ";
        visited.push(this.vertexList[i]);
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                if (visited.indexOf(this.vertexList[j]) < 0) {
                    str += this.vertexList[j] + ' ';
                }
            }
        }
        console.log(str);
        visited.pop();
    }
}


// 开始编写深度优先搜索函数:
function dfs(v) {
    this.marked[v] = true;
    // 用于输出的 if 语句在这里不是必须的 if (this.adj[v] != undefined)
    console.log("Visited vertex:  " + v);
    _self = this;
    this.adj[v].forEach(function (w) {
        if (!_self.marked[w]) {
            _self.dfs(w);
        }
    })
}

// 广度优先搜索算法使用了抽象的队列而不是数组来对已访问过的顶点进行排序。其算法的工作原理如下:
// (1) 查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点列表及队列中; 
// (2) 从图中取出下一个顶点v，添加到已访问的顶点列表;
// (3) 将所有与v相邻的未访问顶点添加到队列。

// 广度优先搜索函数的定义:

function bfs(s) {
    var queue = [];
    var _self = this;
    this.marked[s] = true;
    queue.push(s); // 添加到队尾 
    while (queue.length > 0) {
        var v = queue.shift(); // 从队首移除 
        if (v !== undefined) {
            console.log("Visisted vertex:  " + v);
        }
        this.adj[v].forEach(function (w) {
            if (!_self.marked[w]) {
                _self.edgeTo[w] = v;
                _self.marked[w] = true;
                queue.push(w);
            }
        })
    }
}

// 函数 pathTo() 创建了一个 栈，用来存储与指定顶点有共同边的所有顶点。
function pathTo(v) {
    var source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}

function hashPathTo(v) {
    return this.marked[v];
}

// 第一个函数 topSort()，会设置排序进程并调用一个辅 助函数 topSortHelper()，然后显示排序好的顶点列表。
function topSort() {
    var stack = [];
    var visited = [];
    for (var i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    for (var i = 0; i < stack.length; i++) {
        if (visited[i] == false) {
            this.topSortHelper(i, visited, stack);
        }
    }
    for (var i = 0; i < stack.length; i++) {
        if (stack[i] != undefined && stack[i] != false) {
            print(this.vertexList[stack[i]]);
        }
    }
}

function topSortHelper(v, visited, stack) {
    visited[v] = true;
    this.adj[v].forEach(function (w) {
        if (!visited[w]) {
            this.topSortHelper(visited[w], visited, stack);
        }
    })
    stack.push(v);
}

// test code
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(3);
var vertex = 4;
var paths = g.pathTo(vertex);
var pathLine = '';
while (paths.length > 0) {
    if (paths.length > 1) {
        pathLine += paths.pop() + '-';
    } else {
        pathLine += paths.pop();
    }
}
console.log(pathLine);
// g = new Graph(6);
// g.addEdge(1, 2);
// g.addEdge(2, 5);
// g.addEdge(1, 3);
// g.addEdge(1, 4);
// g.addEdge(0, 1);
// g.vertexList = ["CS1", "CS2", "Data Structures",
//     "Assembly Language", "Operating Systems",
//     "Algorithms"
// ];
// // g.bfs(0);
// g.showGraph();
// g.topSort();