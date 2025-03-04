/**
 * @param {number} n
 *
 * @returns {string}
 */
function isJumping(n) {
    // write code here

    let numText = String(n)
    let numDiff
    let result

    if(numText.length === 1){
        result = 'JUMPING'
        return result
    }

    for(let i = 0; i < numText.length; i++){
        numDiff = Number(numText[i]) - Number(numText[i+1])
        console.log(numDiff)
        if(numDiff === 0 || numDiff !== 1 && numDiff !== -1){

            if(isNaN(numDiff) === true){
                result = 'JUMPING'
                break
               
            }
            result = 'NOT JUMPING'
           
            break
        } 

    }

    // console.log(result)
    return result
}

console.log(isJumping(2300))