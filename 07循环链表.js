// 从循环链表的尾节点向后移动，就等于从后向前遍历链表
// 创建循环链表，只需要修改 LList 类的构造函数

// Node 类用来表示节点
function Node(element) {
    this.element = element; // 保存节点上的数据
    this.next = null; // 保存指向下一个节点的链接
}

// LList 类提供了对链表进行操作的方法
// 链表只有一个属性，那就是使用一个 Node 对象来保存该 链表的头节点
function LList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.findPrevious = findPrevious;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}

// 找到“ 后面” 的节点
function find(item) {
    var currNode = this.head;
    while (currNode.element != item&&
        !(currNode.next.element == "head")) {
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
    while (!(currNode.next == null)&&
        !(currNode.next.element == "head")) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

// 找到前面一个的节点
function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) &&
        (currNode.next.element != item)&&
        !(currNode.next.element == "head")) {
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