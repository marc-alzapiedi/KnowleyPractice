/**
 * @param {Object} suspects
 * @param {string[]} dead
 *
 * @returns {string|undefined}
 */
function getKiller(suspects, dead) {
    // write code here

    // console.log(Object.entries(suspects))

    let trueCount
    let suspectFound = {}
    let killer
    Object.entries(suspects).forEach(([key, value]) => {
        // console.log(key, value)
        trueCount = 0

        dead.forEach((victim) => {
            // console.log(victim, value)
            if(value.includes(victim)){
                trueCount += 1
                suspectFound[key] = trueCount
                
            }
        })
    })

    // console.log(Object.entries(suspectFound))
    if(Object.entries(suspectFound).length === 1){
        return Object.entries(suspectFound)[0][0]
    }

    for(let i = 0; i < Object.entries(suspectFound).length; i++){
        for(let j = i + 1; j < Object.entries(suspectFound).length; j++){
          
            if(Object.entries(suspectFound)[j][1] < Object.entries(suspectFound)[i][1]){
                killer = Object.entries(suspectFound)[i][0]
            } else {
                killer = Object.entries(suspectFound)[j][0]
            }
        }
    }

    return killer
}

console.log(getKiller({
    'Brad': [],
    'Megan': ['Ben', 'Kevin'],
    'Finn': [],
  }, ['Ben']))