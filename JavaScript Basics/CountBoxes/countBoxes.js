/**
 * @param {string} boxes
 *
 * @returns {Object}
 */
function countBoxes(boxes) {
    // write code here

    let result = {}
    // Take each character inside of boxes and append it to an object as keys
    for(let i = 0; i < boxes.length; i++){
        // console.log(boxes[i])
        result[boxes[i]] = 0
    }

    // Count the occurance of each character
    for(let i = 0; i < boxes.length; i++){
        
        // Check if the current string is in the key
        if(result.hasOwnProperty(boxes[i])){
            // store it as the value to it's respective key
            result[boxes[i]] += 1
        }
    }

    return result

}

console.log(countBoxes('aababfg'))