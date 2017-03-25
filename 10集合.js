// 集合(set)是一种包含不同元素的数据结构。集合中的元素称为成员。集合的两个最重 要特性是:首先，集合中的成员是无序的;其次，集合中不允许相同成员存在。


// • 不包含任何成员的集合称为空集，全集则是包含一切可能成员的集合。
// • 如果两个集合的成员完全相同，则称两个集合相等。
// • 如果一个集合中所有的成员都属于另外一个集合，则前一集合称为后一集合的子集。

// • 并集 将两个集合中的成员进行合并，得到一个新集合。
// • 交集 两个集合中共同存在的成员组成一个新的集合。
// • 补集 属于一个集合而不属于另一个集合的成员组成的集合。


function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.show = show;
    this.size = size;
    this.union = union;
    this.contains = contains;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
}

// 将 add() 方法 的返回值定义为布尔类型，可以明确告诉我们是否将一个元素成功加入到了集合中
function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

function show() {
    return this.dataStore;
}

function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}

// union() 方法执行并集操作，将两个集合合并成一个。
function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; ++i) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

// intersect() 方法求两个集合的交集
function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

// subset()该集合是不是待比较集合的一个子集
function subset(set) {
    var flag = true;
    if (this.size() > set.size()) {
        flag = false;
    } else {
        this.dataStore.forEach(function (v, i, a) {
            if (!set.contains(v)) {
                flag = false;
                return false;
            }
        })
    }
    return flag;
}


function size() {
    return this.dataStore.length;
}

// difference() 返回一个新集合，该集合包含的是那些属于第一个集合但不属于第二个集合的成员
function difference(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}


// test code
// var names = new Set();
// names.add("David");
// names.add("Jennifer");
// names.add("Cynthia");
// names.add("Mike");
// names.add("Raymond");
// if (names.add("Mike")) {
//     console.log("Mike added")
// } else {
//     console.log("Can't add Mike, must already be in set");
// }
// console.log(names.show());
// var removed = "Mike";
// if (names.remove(removed)) {
//     console.log(removed + " removed.");
// } else {
//     console.log(removed + " not removed.");
// }
// names.add("Clayton");
// console.log(names.show());
// removed = "Alisa";
// if (names.remove("Mike")) {
//     console.log(removed + " removed.");
// } else {
//     console.log(removed + " not removed.");
// }

// var cis = new Set();
// cis.add("Mike");
// cis.add("Clayton");
// cis.add("Jennifer");
// cis.add("Raymond");
// var dmp = new Set();
// dmp.add("Raymond");
// dmp.add("Cynthia");
// dmp.add("Jonathan");
// var it = new Set();
// it = cis.union(dmp);
// console.log(it.show());
// // 显示 Mike,Clayton,Jennifer,Raymond,Cynthia,Jonathan

// var cis = new Set();
// cis.add("Mike");
// cis.add("Clayton");
// cis.add("Jennifer");
// cis.add("Raymond");
// var dmp = new Set();
// dmp.add("Raymond");
// dmp.add("Cynthia");
// dmp.add("Bryan");
// var inter = cis.intersect(dmp);
// console.log(inter.show()); // 显示 Raymond

// var it = new Set();
// it.add("Cynthia");
// it.add("Clayton");
// it.add("Jennifer");
// it.add("Danny");
// it.add("Jonathan");
// it.add("Terrill");
// it.add("Raymond");
// it.add("Mike");
// var dmp = new Set();
// dmp.add("Cynthia");
// dmp.add("Raymond");
// dmp.add("Jonathan");
// if (dmp.subset(it)) {
//     console.log("DMP is a subset of IT.");
// } else {
//     console.log(dmp.subset(it))
//     console.log("DMP is not a subset of IT.");
// }

var cis = new Set();
var it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
var diff = new Set();
diff = cis.difference(it);
console.log("[" + cis.show() + "] difference [" + it.show() +
    "] -> [" + diff.show() + "]");