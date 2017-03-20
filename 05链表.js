// JavaScript 中数组的主要问题是，它们被实现成了对象，与其他语言(比如 C++ 和 Java) 的数组相比，效率很低

// 链表是由一组节点组成的集合。每个节点都使用一个对象的引用指向它的后继。指向另一个节点的引用叫做链

// 数组元素靠它们的位置进行引用，链表元素则是靠相互之间的关系进行引用

// 设计的链表包含两个类。Node 类用来表示节点，LinkedList 类提供了插入节点、删除节点、显示列表元素的方法，以及其他一些辅助方法。

// Node 类用来表示节点
function Node(element) {
    this.element = element; // 保存节点上的数据
    this.next = null; // 保存指向下一个节点的链接
}

// LList 类提供了对链表进行操作的方法
// 链表只有一个属性，那就是使用一个 Node 对象来保存该 链表的头节点
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.findPrevious = findPrevious;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}

// 找到“ 后面” 的节点
function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

// 插入新节点
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

// 显示链表中的元素
function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

// 找到前面一个的节点
function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) &&
        (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

// 删除一个节点
function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}

// test code
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();

// • advance(n)
// 在链表中向前移动 n 个节点。
// • back(n)
// 在双向链表中向后移动 n 个节点。
// • show() 只显示当前节点。