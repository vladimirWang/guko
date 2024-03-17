// 真正的数据类型
export const trueType = (data: any) => Object.prototype.toString.call(data).slice(8, -1)

type fn = {
  (...args: any[]): any
}

// 合成promise
export const composePromise = (...fns: fn[]) => {
  if (fns.length === 0) return Promise.reject(new Error('没有函数'))
  const last: Function = fns.shift()!
  return (...args: any[]) => {
    return fns.reduce(
      (a, c) => {
        return a.then((result: any) => c(result))
      },
      Promise.resolve(last(...args)),
    )
  }
}
