/**
 * @param {numbers[]} people
 *
 * @returns {numbers[]}
 */
function getRowWeights(people) {
    // write code here
    
    let result = []
    let team1 = 0
    let team2 = 0

    for (let i = 0; i < people.length; i++){
        if(!(i % 2 === 0)){
            // console.log(i)
            team2 += people[i]
            continue
        }

        // console.log(i)

        team1 += people[i]
    }

    result = [team1, team2]

    return result
    
}

console.log(getRowWeights([10, 85, 90]))