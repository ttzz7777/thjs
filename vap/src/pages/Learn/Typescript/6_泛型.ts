export default {}

let getArray = <T>(items: number, value: T): T[] => {
  return new Array(items).fill(value)
}

let arr = getArray<number>(3, 1)

console.log(arr)
console.log("123");

