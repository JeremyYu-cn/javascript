
class ObjectMethods {
    constructor() {

    }

    // 实现一个new
    myNew() {
        let obj = null;
        let constructor = Array.prototype.shift.call(arguments);
        let result = null;
        if (!constructor || typeof constructor !== 'function') {
            throw new Error('first must be a function');
        }

        obj = Object.create(constructor.prototype);
        result = constructor.apply(obj, arguments);

        const flag = (result && (typeof result === 'object' || typeof result === 'function'));

        return flag ? result : obj;
    }

}

const objectMethods = new ObjectMethods();

module.exports = objectMethods;
