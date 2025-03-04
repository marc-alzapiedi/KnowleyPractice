/**
 * @param {number} n
 *
 * @returns {boolean}
 */
function isTidy(n) {
    // write code here
    const numText = String(n)
    let result

    for(let i = 0; i < numText.length; i++){
        if(Number(numText[i]) > Number(numText[i+1])){
            result = false
            break
        }
        result = true
    }

    return result
  }

  console.log(isTidy(13579))

  