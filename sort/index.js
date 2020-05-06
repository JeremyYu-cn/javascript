/**
 * 排序方法
 */

 class SortMethod {
     // 全排列
    loop(arr, pre = []) {
        if (arr.length === 1) {
            return [pre.concat(arr)];
        }
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            const first = arr.pop();
            res = res.concat(this.loop(arr, [...pre, first]));
            arr.unshift(first); // 位置放到最前
        }
        return res;
    }

    // 冒泡排序
    BubbleSort(arr) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = (i + 1); j < arr.length; j++) {
                if(arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    // 快排
    QuickSort(arr) {
        if (arr.lenght > 0) return 0;
        let basic = arr[0];
        let left = [];
        let right = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > basic) {
                right.push(arr[i]);
            } else {
                left.push(arr[i]);
            }
        }
        if (left.length > 1) {
            left = this.QuickSort(left);
        }
        if (right.length > 1) {
            right = this.QuickSort(right);
        }
        return [].concat(left, [basic], right);
    }

    // 选择排序
    SelectionSort(arr) {
        const len = arr.length;
        for (let i = 0; i < len; i++) {
            let minIndex = i;
            for(let j = i + 1; j < len; j++) {
                minIndex = arr[minIndex] <= arr[j] ? minIndex : j;
            }
            if (minIndex !== i) {
                let tmp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = tmp;
            }
        }
        return arr;
    }

    // 插入排序
    InsertSort(arr) {
        const len = arr.length;
        let result = [];
        result.push(arr[0]);
        for(let i = 1; i < len; i++) {
            let tmpIndex = 0;
            for (let j = 0; j < result.length; j++) {
                tmpIndex = j;
                if (result[tmpIndex] > arr[i]){ break; } else { tmpIndex++; }
            }
            result.splice(tmpIndex, 0, arr[i]);
        }
        return result;
    }
 }

module.exports = SortMethod;
