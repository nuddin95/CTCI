//Given a string check if it is a permutation of a palindrome

function pp(str){
    let s = str.replace(/\s/g, '')
    let count = {}
    let single=0;

    //get character count in an object
    for(let i=0; i<s.length; i++){
      count[s.charAt(i)] = count[s.charAt(i)]+1 || 1 
    }
    
    //make sure only one character appears 1 time
    for(let key in count){
      if(count[key] % 2) single++
    }
    
    return (single <= 1)
}