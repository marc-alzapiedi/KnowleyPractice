/**
 * @param {string} guestsInput
 *
 * @returns {number|string}
 */
function calculateGuests(guestsInput) {
    // write code here

    const resultArr = guestsInput.match(/\d+(\.\d+)?/g)
    if (resultArr === null){
        return 'not a number'
    }

    if(Number(resultArr[0]) === 0){
        return 'not a number'
    }
    // console.log(resultArr)

    return isNaN(Math.floor(Number(resultArr[0]))) ? 'not a number' : Math.floor(Number(resultArr[0]))

}

console.log(calculateGuests(''))