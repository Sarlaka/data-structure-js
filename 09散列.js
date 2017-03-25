// 散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。散列使用的数据 结构叫做散列表。在散列表上插入、删除和取用数据都非常快，但是对于查找操作来说却 效率低下，比如查找一组数据中的最大值和最小值。

// 我们的散列表是基于数组进行设计的。数组的长度是预先设定的，如有需要，可以随时增加。

function HashTable() {
    this.table = new Array(137);
    // this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
}

function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

function get(key) {
    return this.table[this.betterHash(key)];
}
// function simpleHash(data) {
//     var total = 0;
//     for (var i = 0; i < data.length; ++i) {
//         total += data.charCodeAt(i);
//     }
//     console.log("Hash value: " + data + " -> " + total);
//     return total % this.table.length;
// }

function showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
        if (this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}

// 使用霍纳算法的更好的散列函数
function betterHash(string) {
    const H = 37;
    var total = 0;
    for (var i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length - 1;
    }
    return parseInt(total);
}

// test code
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
};
hTable.showDistro();