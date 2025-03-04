/**
 * @param {number[]} colors
 *
 * @returns {number}
 */
function countMatchingSocks(colors) {
    // write code here
    let count = {}
    let result = 0
    let remainder = 0
    let diff = 0
    colors.forEach((color) => {
        if(!count[color]){
            count[color] = 0
        }
        count[color] += 1

    })
    console.log(Object.values(count))

    Object.entries(count).forEach(([key, value]) => {
        // console.log(key, value)
        remainder = value % 2
        diff = value - remainder
        result += diff / 2
    })

    return Number(result)
    
}

console.log(countMatchingSocks([2, 2, 2, 2, 2, 1]))