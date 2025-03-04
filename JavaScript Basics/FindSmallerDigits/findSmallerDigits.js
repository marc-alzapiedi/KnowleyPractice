/**
 * @param {number[]} numbers
 *
 * @returns {number[]}
 */
function countNextSmaller(numbers) {
    // write code here

    let result = []
    let count 

    for(let i = 0; i < numbers.length; i++){
        // console.log(numbers[i])
        count = 0

        for(let j = 0; j < numbers.length; j++){
            // if(!numbers[i+j]){
            //     continue
            // }
            console.log(numbers[i+j], i, j)

            if(numbers[i] > numbers[i+j]){
                count += 1
            }
            
        }
        result.push(count)
    }

    return result
}

console.log(countNextSmaller([1,2,0]))