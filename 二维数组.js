//建立一个二维数组，同时赋予一个初始值
Array.matrix = function(numrows, numcols, initial) {
        var arr = [];
        for (var i = 0; i < numrows; ++i) {
           var columns = [];
           for (var j = 0; j < numcols; ++j) {
              columns[j] = initial;
           }
        arr[i] = columns;
        }
        return arr;
}
// 测试
var testArr = Array.matrix(3,3,0);
console.log(testArr)