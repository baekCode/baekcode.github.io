/**
 * namespace parttern
 * @class
 * */
const NAMESPACE = undefined || {}

/**
 * @method
 * @param {string}
 * @return object
 * */
NAMESPACE.namespace = function (string) {
    let splitString = string.split('.');
    let parent = NAMESPACE;

    if (splitString[0] === 'NAMESPACE') {
        splitString = splitString.slice(1)
    }

    splitString.forEach((item) => {
        if( typeof parent[item === undefined]) {
            parent[item] = {}
        }
        parent = parent[item];
    })

    return parent
}
NAMESPACE.namespace('NAMESPACE.module.module2')
NAMESPACE.namespace('test.name')
console.log(NAMESPACE)
console.log(NAMESPACE.module)
