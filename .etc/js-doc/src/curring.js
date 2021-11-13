/**
 * curring 함수
 * @param {number}
 * @param {any} curring
 * */
function curring(fn) {
    const slice = Array.prototype.slice
    const stored_args = slice.call(arguments, 1);

    return function() {
        if(arguments[0] === undefined) throw new Error( '필수 값이 누락')
        const new_args = slice.call(arguments)
        const args = stored_args.concat(new_args)

        return fn.apply(null, args)
    }
}

/**
 * 여러 인자값을 받는 add 함수
 * @param {number} ...arg
 * */
const add = (...arg) => {
    return arg.reduce((acc, cur) => {
        acc += cur
        return acc
    })
}


const newadd = curring(add, 6)
console.log(newadd(5, 10))