// There are three types of edits: inserting, deleting, replacing a Character
// Determine if two strings are one or zero edits away and return true if they are

function oneAway(str1, str2){
    if (Math.abs(str1.length - str2.length) > 1) return false
    
    let type;
    if(str1.length > str2.length){
      type = "deletion"
    }else if(str1.length < str2.length){
      type = "insertion"
    }else{
      type = "replace"
    }
    
    let err=0
    
    switch(type){
      case("deletion"):
        for(let i=0; i<str1.length; i++){
          if(str1[i] !== str2[i-err]) err++
        }
        break;
      case("insertion"):
        for(let i=0; i<str2.length; i++){
          if(str2[i] !== str1[i-err]) err++
        }
        break;
      case("replace"):
        for(let i=0; i<str1.length; i++){
          if(str1[i] !== str2[i]) err++
        }
        break;
      default:
        return "How did you get here???"
    }
    
    return !(err-1)
}