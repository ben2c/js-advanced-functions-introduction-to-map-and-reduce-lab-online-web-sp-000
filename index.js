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

const mapToDouble = function(sourceArray) {
  let newArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArr[i] = 2*sourceArray[i]
  }
  return newArr
}

const mapToSquare = function(sourceArray) {
  let newArr = []
  for (let i = 0; i < sourceArray.length; i++) {
    newArr[i] = sourceArray[i]**2
  }
  return newArr
}

const reduceToTotal = function(sourceArray, startingPoint = 0) {
  let total = 0
  for (let i = 0; i < sourceArray.length; i++) {
    total += sourceArray[i]
  }
  return total
}