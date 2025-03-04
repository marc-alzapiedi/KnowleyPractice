/**
 * @param {string} stones
 *
 * @returns {number}
 */
function colorStones(stones) {
    // write code here
  
    let count = 0
  
    for(let i = 0; i < stones.length; i++){
    //   console.log(stones[i], stones[i - 1])

    if(!stones[i - 1]){
        continue
    }

    if(stones[i] === stones[i-1]){
        count += 1
    }


    }

    return count
}

console.log(colorStones('RRGB'))