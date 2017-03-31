// 队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素。
// 队列用于存储按 顺序排列的数据，先进先出，这点和栈不一样
// 队列是一种先进先出(First-In-First-Out，FIFO)的数据结构

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue; // 向队尾添加一个元素
    this.dequeue = dequeue; // 删除队首的元素
    this.front = front; // 读取队首的元素
    this.back = back; // 读取队尾的元素
    this.toString = toString; // 显示队列内的所有元素
    this.empty = empty; // 判断队列是否为空
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}

// test code
var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

// 输出：
// Meredith
// Cynthia
// Jennifer
// Cynthia
// Jennifer
// Front of queue: Cynthia
// Back of queue: Jennifer