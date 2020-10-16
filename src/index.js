
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) { return []}
    let arr = [];
    matrix.forEach((i,index) => {
      if (index % 2 === 0){
        arr = [...arr,...i]
      } else {
        arr = [...arr,...i.reverse()];
      }
    });
    return arr;  
  }
