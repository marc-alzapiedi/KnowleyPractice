/**
 * @param {string} target
 *
 * @returns {boolean}
 */
function isWerewolf(target) {
    // write code here


   let forwardString = target.replaceAll(' ', '').toLowerCase().replaceAll(/[^a-z]/g, '')
   let reverseString = ''
    for (let i = forwardString.length - 1; i >= 0; i--){
        // if (!(/^[a-z]$/.test(forwardString[i]))){
        //     continue
        // }
        // if (forwardString[i] === ' '){
        //     continue
        // }
        // if(/^[A-Z]$/.test(forwardString[i])){
        //     reverseString += forwardString[i].toLowerCase()
        // }

        reverseString += forwardString[i]
    }

    console.log(reverseString, forwardString)

    return forwardString === reverseString ? true : false
}

console.log(isWerewolf('OF'))