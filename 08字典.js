// 字典是一种以键 - 值对形式存储数据的数据结构
// JavaScript 的 Object 类就是以字典的形式设计的

function Dictionary() {
    this.datastore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for (var key in this.datastore) {
        console.log(key + " -> " + this.datastore[key]);
    }
}

function count() {
    var n = 0;
    for (var key in this.datastore) {
        ++n;
    }
    return n;
}

function clear() {
    for (var key in this.datastore)  {
        delete this.datastore[key];
    }
}


// test code
var pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());