/**
 * @param {string} letters
 *
 * @returns {boolean}
 */
function isAlphabet(letters) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    if(letters.length === 0){
        return false
    }

    return alphabet.includes(letters.toLowerCase())

}

console.log(isAlphabet('xyz'))