const { object } = require('../javascript');

describe('test javascript object method', () => {
    test('create "new" method', () => {
        function test() {
            return {
                a: 1,
            }
        }
        expect(object.myNew(test)).toEqual({ a: 1, })
    })
})
