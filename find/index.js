/**
 * 查找方法
 */

 class FindMethod {
     // 二分法查找
    binaryFind(arr, target, from, to) {
        if ( from > to ) return -1;
        let middle = Math.floor((from + to) / 2);
        let searchArr = [];
        if (target === arr[middle]) return middle;

        if (target > arr[middle]) {
            return method1(arr, target, middle + 1, to);
        } else {
            return method1(searchArr, target, from, middle - 1);
        }
    }
 }

module.exports = FindMethod;
