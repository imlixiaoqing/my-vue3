// Object 类型

export {}

const foo: object = function() {}

const obj: {foo: number, bar: string} = {
  foo: 100,
  bar: 'hello',
}

// 数组类型

const arr1: Array<number> = [1, 2]
const arr2: number[] = [2, 4]

function sum(...args: number[]) {
  return args.reduce((prev, current) => prev + current, 0)
}

sum(2, 34)
