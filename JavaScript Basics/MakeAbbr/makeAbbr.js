/**
 * @param {string} words
 *
 * @returns {string}
 */
function makeAbbr(words) {
    // write code here
    // words = 'national aeronautics space administration'
    // result = 'NASA'

    let result = words[0]

    for(let i = 1; i < words.length; i++){
        if(words[i-1] === ' '){
            result += words[i]
        }
    }

    return result.toUpperCase()
    
}

console.log(makeAbbr('national aeronautics space administration'))