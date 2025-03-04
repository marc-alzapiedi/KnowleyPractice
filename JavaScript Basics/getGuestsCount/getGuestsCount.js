/**
 * @param {string} guestsInput
 *
 * @returns {number}
 */
// write code here
function getGuestsCount(guestsInput) {

    return isNaN(parseInt(guestsInput)) === true ? 'not a number' : parseInt(guestsInput)
}

console.log(getGuestsCount('3 people'))