// 二叉树每个节点的子节点不允许超过两个。通过将子节点的个数限定为 2，可以写出高效的程序在树中插入、查找和删除数据。


// Node 对象既保存数据，也保存和其他节点的链接(left 和 right)，show() 方法用来显示 保存在节点中的数据。
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

// 现在可以创建一个类，用来表示二叉查找树(BST)。我们让类只包含一个数据成员:一个 表示二叉查找树根节点的 Node 对象。该类的构造函数将根节点初始化为 null，以此创建 一个空节点。
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
}

// BST 先要有一个 insert() 方法，用来向树中加入新节点。
// 首先要创建一个 Node 对象，将数据传入该对象保存。
// 其次检查 BST 是否有根节点，如果没有，那么这是棵新树，该节点就是根节点，这个方法 到此也就完成了;否则，进入下一步。
// 如果待插入节点不是根节点，那么就需要准备遍历 BST，找到插入的适当位置。该过程类 似于遍历链表。用一个变量存储当前节点，一层层地遍历 BST。
// 进入 BST 以后，下一步就要决定将节点放在哪个地方。找到正确的插入点时，会跳出循 环。查找正确插入点的算法如下。
// (1) 设根节点为当前节点。
// (2) 如果待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点;反之，执行第 4 步。
// (3) 如果当前节点的左节点为 null，就将新的节点插入这个位置，退出循环;反之，继续执行下一次循环。
// (4) 设新的当前节点为原节点的右节点。
// (5) 如果当前节点的右节点为 null，就将新的节点插入这个位置，退出循环;反之，继续执行下一次循环。
function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

// 有三种遍历 BST 的方式:中序、先序和后序。中序遍历按照节点上的键值，以升序访问 BST 上的所有节点。先序遍历先访问根节点，然后以同样方式访问左子树和右子树。后序 遍历先访问叶子节点，从左子树到右子树，再到根节点。

// 中序遍历的代码如下:
function inOrder(node) {

    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}

// 先序遍历的定义如下:
function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}

//后序遍历 postOrder() 方法的实现如下:
function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}

// getMin() 方法查找 BST 上的最小值，该方法的定义如下:
function getMin() {
    var current = this.root;
    while (!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}
// getMax() 方法的定义如下:
function getMax() {
    var current = this.root;
    while (!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}
// find() 方法用来在 BST 上查找给定值
function find(data) {
    var current = this.root;
    while (current != null) {
        if (current.data == data) {
            return current;
        } else if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}

// 为了管理删除操作的复杂度，我们使用递归操作，同时定义两个方法:remove() 和 removeNode()。
// 从 BST 中删除节点的第一步是判断当前节点是否包含待删除的数据，如果包含，则删除该 节点;如果不包含，则比较当前节点上的数据和待删除的数据。如果待删除数据小于当前 节点上的数据，则移至当前节点的左子节点继续比较;如果删除数据大于当前节点上的数 据，则移至当前节点的右子节点继续比较。
// 如果待删除节点是叶子节点(没有子节点的节点)，那么只需要将从父节点指向它的链接 指向 null。
// 如果待删除节点只包含一个子节点，那么原本指向它的节点久得做些调整，使其指向它的 子节点。
// 最后，如果待删除节点包含两个子节点，正确的做法有两种:要么查找待删除节点左子树 上的最大值，要么查找其右子树上的最小值。这里我们选择后一种方式。

// 整个删除过程由两个方法完成。remove() 方法只是简单地接受待删除数据，调用 removeNode()删除它，后者才是完成主要工作的方法。两个方法的定义如下:
function remove(data) {
    root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        // 没有子节点的节点
        if (node.left == null && node.right == null) {
            return null;
        }
        // 没有左子节点的节点
        if (node.left == null) {
            return node.right;
        }
        // 没有右子节点的节点
        if (node.right == null) {
            return node.left;
        }
        // 有两个子节点的节点
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}


// test code
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
inOrder(nums.root);
console.log("Preorder traversal: ");
preOrder(nums.root);
console.log("Postorder traversal: ");
postOrder(nums.root);
var min = nums.getMin();
console.log("The minimum value of the BST is: " + min);
console.log("\n");
var max = nums.getMax();
console.log("The maximum value of the BST is: " + max);
var found = nums.find(3);
console.log("Found " + found + " in the BST.");
// Inorder traversal:
// 3 16 22 23 37 45 99
// Preorder traversal:
// 23 16 3 22 45 37 99
// Postorder traversal:
// 3 22 16 37 99 45 23