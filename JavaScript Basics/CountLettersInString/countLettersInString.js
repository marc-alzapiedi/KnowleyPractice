/**
 * @param {string} str
 *
 * @returns {Object}
 */
function countLettersInString(str) {
    // write code here
  
    let result = {}

  
    for(let i = 0; i < str.length; i++){

        if(!result[str[i]]){
            result[str[i]] = 0
        }
        result[str[i]] += 1
    }
  
    return result
}

console.log(countLettersInString('arithmetics'))