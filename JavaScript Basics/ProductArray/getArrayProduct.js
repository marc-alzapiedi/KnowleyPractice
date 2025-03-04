/**
 * @param {number[]} numbers
 *
 * @returns {number[]}
 */
function getArrayProduct(numbers) {
    // write code here

    let product
    let result = []
    for (let i = 0; i < numbers.length; i++){
        product = 1
        for (let j = 0; j < numbers.length; j++){
            if (i === j){
                continue
            }
            product *= numbers[j]
            // console.log(i, j, numbers[j], product)
            
            
        }
        console.log(product)
        result.push(product)
    }
    
    return result

}

console.log(getArrayProduct([1,5,2]))