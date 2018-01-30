//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures

function isUnique(str){
    for(let i=0; i<str.length; i++){
      //checks if the first and last index are the same if not then return false
      if(str.lastIndexOf(str[i]) !== i){
        return false
      }
    }
    return true
  }
  
  // isUnique("abcdef") //true
  // isUnique("aa") //false
  // isUnique("asdfghjk") //true
  // isUnique(".,/123 45 67") //false