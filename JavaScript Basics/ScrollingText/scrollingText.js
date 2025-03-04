/**
 * @param {string} word
 *
 * @returns {string[]}
 */
function scrollingText(word) {
    // write code here
    let normalizedWord = word.toUpperCase()
    let replaceChar
    let result = []
    for(let i = 0; i < normalizedWord.length; i++){
        replaceChar = normalizedWord.slice(i) + normalizedWord.slice(0, i)

        result.push(replaceChar)
    }

    return result


}

console.log(scrollingText('robot'))