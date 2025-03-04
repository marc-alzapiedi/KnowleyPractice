/**
 * @param {Object} object
 *
 * @returns {number}
 */
function addNumbers(object) {
    // write code here
  
    let result = 0
    Object.values(object).forEach((value) => {
        // console.log(isNaN(value))
        

        if(Number.isInteger(value)){
           
            result += value / 1
        }
    })
  
  return result
}

console.log(addNumbers({
    foo: 'js',
    bar: 'fe',
    boo: 3,
    spam: 10,
    egg: 11,
  }))