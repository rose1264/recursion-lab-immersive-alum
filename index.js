function printString(str){
  console.log(str[0])
  if(str.length > 1){
    printString(str.substring(1))
  } else {
    return true
  }
}

function reverseString(str){
  //example: rose, ose+r; se+o+r, e+s+o+r
  //base case: length === 1
  if(str.length === 1){
    return str
  }else{
    return reverseString(str.substring(1)).concat(str[0])
  }
}

function isPalindrome(str){
  if(str.length < 2){
    return true //base case
  } else {
    if(str[0]===str[str.length-1]){
      return isPalindrome(str.substring(1, str.length-1))
    }else{
      return false
    }
  }
}

function addUpTo(arr, idx){
  if(idx){
    return arr[idx] + addUpTo(arr, --idx)
  } else {
    return arr[idx] // base case
  }
}

function maxOf(arr){
  if(arr.length === 1){
    return arr[0]
  } else {
    return Math.max(arr.pop(), maxOf(arr)) //pop method changes the original array
  }
}

function includesNumber(arr, num){
  if(!arr.length){
    return false
  } else {
    if(arr[0] === num){
      return true
    } else {
      return includesNumber(arr.slice(1), num)
    }
  }
}
