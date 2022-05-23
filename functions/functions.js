
function convertToRoman(num) {
    let romanNumeral = "";
    const numeralsList = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
  }
  
  let numeral = Object.keys(numeralsList)
  
    //Collect the amounts
  const thousands = Math.floor(num/ numeralsList["M"])
  num = num - (numeralsList["M"] * thousands)
  const hundreds = Math.floor(num/ numeralsList["C"])
  num = num - (numeralsList["C"] * hundreds)
  const tens = Math.floor(num/ numeralsList["X"])
  num = num - (numeralsList["X"] * tens)
  const ones = Math.floor(num/ numeralsList["I"])
  
  //Mutate the numbers into Numerals
  let thousandsArr = []
  let hundredsArr = []
  let tensArr = []
  let onesArr = []
  
  const changeToNumeral = function(arr, num, key) {
  for(let i = 0; i < num; i++) {
    switch(i) {
      case 0:
      case 1:
      case 2:
        arr.push(numeral[key])
        break;
      case 3:
        arr.splice(0);
        arr.push(numeral[key])
        arr.push(numeral[key+1])
        break;
      case 4:
        arr.splice(0);
        arr.push(numeral[key+1])
        break;
      case 5:
        arr.splice(0);
        arr.push(numeral[key+1])
        arr.push(numeral[key])
        break;
      case 6:
      case 7:
        arr.push(numeral[key])
        break;
      case 8:
        arr.splice(0);
        arr.push(numeral[key])
        arr.push(numeral[key+2])
        break;
    }
  }
  }
  
  changeToNumeral(thousandsArr, thousands, 6)
  changeToNumeral(hundredsArr, hundreds, 4)
  changeToNumeral(tensArr, tens, 2)
  changeToNumeral(onesArr, ones, 0)
  
  
  romanNumeral = [...thousandsArr,...hundredsArr, ...tensArr, ...onesArr].join("")
  
  return romanNumeral
  
  }

  module.exports = {convertToRoman}