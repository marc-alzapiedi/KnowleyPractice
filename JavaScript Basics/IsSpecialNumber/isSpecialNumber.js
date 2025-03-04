/**
 * @param {number} n
 *
 * @returns {string}
 */
function isSpecialNumber(n) {
    // write code here
    let result
    const numText = n.toString()

    for(let i = 0; i < numText.length; i++){
        console.log(Number(numText[i]))
        if(Number(numText[i]) >= 5){
            result = 'NOT!!'
            break
        }
        result = 'Special!!'
    }

    return result

}

console.log(isSpecialNumber(5))