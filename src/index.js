
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) return [];
  let temp = matrix.reduce((acc,item,index) => {
    if(index % 2 !== 0) {
      return acc = [...acc,...item.reverse()]
    } else {
      return acc = [...acc,...item]
    }
  },[])
  return temp;
}
