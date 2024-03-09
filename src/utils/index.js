// 真正的数据类型
export const trueType = data => Object.prototype.toString.call(data).slice(8, -1)

// 合成promise
export const composePromise = (...fns) => {
    const last = fns.shift();
    return (...args) => {
        return fns.reduce((a, c) => {
            return a.then(result => c(result))
        }, Promise.resolve(last(...args)))
    }
}