// 栈是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端称为栈顶
// 栈被称为一种后入先出(LIFO，last-in-first-out)的数据结构
// 所以任何不在栈顶的元素都无法访问。为了得到栈底的元 素，必须先拿掉上面的元素

function CreateStack() {
    this.dataStore = [];
    this.top = 0; // 栈顶
    this.push = push; // 压入一个新元素，同时将 top 值加 1，让其指向数组中下一个空位
    this.pop = pop; // 返回栈顶元素，同时将变量 top 的值减 1
    this.peek = peek; // 返回数组的第 top-1 个位置的元素，即栈顶元素
    this.clear = clear; // 轻松清空一个栈
    this.length = length; // 返回栈 内的元素个数
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function peek() {
    return this.dataStore[this.top - 1];
}

function pop() {
    return this.dataStore[--this.top];
}

function clear() {
    this.top = 0;
    this.dataStore = [];
}

function length() {
    return this.top;
}