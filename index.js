// Your code here
const mapToNegativize = function(sourceArray) {
  let newArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArr[i] = -sourceArray[i]
  }
  return newArr
}

const mapToNoChange = function(sourceArray) {
  let newArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArr[i] = sourceArray[i]
  }
  return newArr
}