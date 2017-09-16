/*
 Missing-letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {

  //turn the string into an array
  var strArr = str.split("");

  //get the first item of the string's char code and set it as our running reference
  var refIndex = str.charCodeAt(0);
  var result = "";

  //go through the array testing how the running refFndex character compares with the each elemnt of the array
  //then return the character that does not match
  result = strArr.map(function (currentLetter) {
    let refLetter = String.fromCharCode(refIndex++);
    return currentLetter !== refLetter ? refLetter : '';
  });

  //remove any unwanted data and return the first index. If there is no first index e.g. if everything matched, 
  //the array's value will be 'undefined' because there's nothing to return
  return result.filter( e => e)[0];
}

console.log(fearNotLetter("abce")); // should return "d".
console.log(fearNotLetter("abcdefghjklmno")); // should return "i".
console.log(fearNotLetter("bcd")); // should return undefined.
console.log(fearNotLetter("yz")); // should return undefined.