/*
 Missing-letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    return str;
  }
  
  fearNotLetter("abce");

  console.log(fearNotLetter("abce")); // should return "d".
  console.log(fearNotLetter("abcdefghjklmno")); // should return "i".
  console.log(fearNotLetter("bcd")); // should return undefined.
  console.log(fearNotLetter("yz")); // should return undefined.