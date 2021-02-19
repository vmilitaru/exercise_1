/* Please write a function that takes two parameters: a string and an integer. The function should return another string that is similar to the input string but has had characters removed such that there are no consecutive runs of the same character longer than the integer parameter.

For example:

("xxxy", 2) → "xxy"
("xxyy", 1) → "xy"
("xxyyxx", 1) → "xyx" */

//-------------------------------------------------------------------------Things we know------------------------------------------------------------------------------

//write a function
//the function takes in 2 parameters: a string and an integer
//the function is returning a string similar to the input string
//the length of the returned string with same consecutive character shouldn't be greater than the integer value
//the integer is the upper limit of the string length with the same consecutive characters inside the returned string

//------------------------------------------------------------------------Things we don't know---------------------------------------------------------------------------

//not clear if we should ignore the integer sign or only consider integers >0
//not clear if the function should be case insensitive
//not clear if the function should ignore white spaces at both ends or even inside the string - or we should assume that the string will not have white spaces or consider the white spaces as well
//not clear what to return if the input string is an empty string or a string white spaces

//----------------------------------------------------------------------Solution-Plan---------------------------------------------------------------------------------------

//write a function ==> removeDuplicateCharacters
//the function takes in 2 parameters: a string and an integer
//define a count variable ==> let count=1
//define an array variable ==> let newArray=[] or a string variable==> newString=""
//make sure that the characters are in the same case ==> toLowerCase()
//convert the string into an array ==> .split("")
//loop through the array: for loop/map/filter/every/reduce
//if currItem===nextItem && count<integer ==>  count+=1 and newArray.push(currItem) or newString+=currItem
//else if(currItem!==arr[i+1]) ==>count=0 and newArray.push(currItem) or newString+=currItem


//--------------------------------------------------------------------Assumptions--------------------------------------------------------------------------------------------

//the returned string it is alternating the characters similar to the input string 
//run the code only when integer>0 else return a message: "Please make sure the integer is greater than zero"
//remove all the white spaces from the string

function removeDuplicateCharacters(string, integer) {
    let removeWhiteSpaces=string.replace(/ /g,'')
    let count = 1;
    if (integer>0){
    return removeWhiteSpaces.split("").reduce((newString, currItem, i, arr) => {
        if(typeof arr[i+1]!=="undefined"){
          if (currItem.toLowerCase() === arr[i+1].toLowerCase() && count < integer) {
            count += 1;
            newString += currItem;
          } else if (currItem.toLowerCase() !== arr[i+1].toLowerCase()) {
            count = 1;
            newString += currItem;
          }
        }
         if(typeof arr[i+1]==="undefined" && typeof currItem !== "undefined"){
          return newString += currItem;
        }
          return newString;
        }, "");
  
    }return "Please make sure the integer is greater than zero"
    
      
  }
  module.exports={removeDuplicateCharacters}