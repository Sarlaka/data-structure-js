// 列表构造函数
function CreateList() {
    this.dataStore = []; // 初始化一个空数组来保存列表元素 
    this.listSize = 0; // 列表的元素个数
    this.pos = 0; // 列表的当前位置
    this.length = length; // 返回列表中元素的个数
    this.find = find; // 列表中查找某一元素*
    this.toString = toString; // 返回列表的字符串形式
    this.getElement = getElement; // 返回当前位置的元素
    this.insert = insert; // 在现有元素后插入新元素
    this.append = append; // 在列表的末尾添加新元素*
    this.remove = remove; // 从列表中删除元素*
    this.front = front; // 将列表的当前位置设移动到第一个元素
    this.end = end; // 将列表的当前位置移动到最后一个元素
    this.prev = prev; // 将当前位置后移一位
    this.next = next; // 将当前位置前移一位
    this.currPos = currPos; // 返回列表的当前位置
    this.moveTo = moveTo; // 将当前位置移动到指定位置
    this.clear = clear; // 清空列表中的所有元素
    this.contains = contains; // 判断给定值是否在列表
}

// 1.append方法实现。
// 根据listSize添加元素，同时添加完成之后listSize的值会+1
function append(element) {
    this.dataStore[this.listSize++] = element;
}

// 2.remove方法实现。
// 在列表中找到该元素，然后删除它，并且调整底层的数组对象以填补删除该元素后留下的空白
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

// 3.find方法实现。
// 对数组对象 dataStore 进行迭代，查找给定的元素。如果找到，就返回该 元素在列表中的位置，否则返回 -1
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

// 4.length方法
// length() 方法返回列表中元素的个数
function length() {
    return this.listSize;
}

// 5.toString 方法
function toString() {
    return this.dataStore;
}

// 6.insert方法
// find() 方法会寻找传入的 after 参数在列 表中的位置，找到该位置后，使用 splice() 方法将新元素插入该位置之后，然后将变量 listSize 加 1 并返回 true，表明插入成功。
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

// 7.clear方法，清空利表
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

// 8.contains:判断给定值是否在列表
function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

// 9.遍历列表
// 最后的一组方法允许用户在列表上自由移动，最后一个方法 getElement() 返回列表的当前元素
function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}
