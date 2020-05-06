
const { SortMethod, FindMethod } = require('../index.js');
const find = new FindMethod();
const sort = new SortMethod();

describe('find and sort', () => {

    test('loop', () => {
        expect(sort.loop([1,2])).toEqual([[2,1],[1,2]]);
    })

    test('binary find', () => {
        expect(find.binaryFind([1,2,3,4,5,6], 3, 0, 5)).toBe(2);
    })

    test('bubble sort', () => {
        let arr = [2,1,4,3];
        expect(sort.BubbleSort(arr)).toEqual([1,2,3,4]);
    })

    test('quick sort', () => {
        let arr = [7,2,1,0];
        expect(sort.QuickSort(arr)).toEqual([0,1,2,7])
    })

    test('selection sort', () => {
        let arr = [11,21,31,51,41,11,21];
        expect(sort.SelectionSort(arr)).toEqual([11,11,21,21,31,41,51])
    })

    test('insertion sort', () => {
        let arr = [3,2,1,5,4,8,6,7];
        expect(sort.InsertSort(arr)).toEqual([1,2,3,4,5,6,7,8]);
    })

})

