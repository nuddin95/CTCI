/* 
Given a matrix if any of the entries are 0 then the entire row and column of that entry ill also be 0
*/

function zeroMatrix(matrix){
    let result = []
    let y = matrix.length
    let x = (matrix[0]).length
    
    let excludeX = []
    let excludeY = []
    
    for(let i=0; i< y; i++){
      for(let j=0; j<x; j++){
        if(matrix[i][j] === 0){
          excludeX.push(j)
          excludeY.push(i)
        }
      }
    }
    
    for(let i=0; i< y; i++){
      let row=[]
      for(let j=0; j<x; j++){
        if(excludeY.includes(i) || excludeX.includes(j)){
          row.push(0)
        }else{
          row.push(matrix[i][j])
        }
      }
      result.push(row)
    }
    
    return result
    
}