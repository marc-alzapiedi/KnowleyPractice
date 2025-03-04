/**
 * @param {number[]} numbers
 *
 * @returns {number[]}
 */
function getLeaders(numbers) {
    // write your code here

    let result = []
    let count
    let sum

    for (let i = 0; i < numbers.length; i++){
        count = 0
        sum = 0
        for (let j = i + 1; j < numbers.length; j++){
            sum += numbers[j]
        }

        if(numbers[i] > sum){
            result.push(numbers[i])
        }
    }

    return result

}

console.log(getLeaders([1, 2, 3, 4, 0]))