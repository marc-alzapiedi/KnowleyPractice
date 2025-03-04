/**
 * @param {number} amount
 * @param {number} percent
 * @param {number} period
 *
 * @returns {number}
 */
function calculateProfit(amount, percent, period) {
    // write code here
  
    // Amount ($10,000)
    // percent (4%)
    // period (n - years) [The number of times needed to execute an iteration]

    const initialAmount = amount
    let factor = Math.pow(10, 2)
  
    for (let i = 0; i < period; i++){
        amount += amount * (percent / 100);
    }

    console.log(factor)
    const finalResult = Math.round((amount - initialAmount) * factor) / factor
    
    return finalResult

}

console.log(typeof calculateProfit(10000, 4, 3), calculateProfit(10000, 4, 3))