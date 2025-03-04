/**
 * @param {number} startProduction
 * @param {number} numberOfMonths
 * @param {number} percent
 *
 * @returns {number[]}
 */
function getPlan(startProduction, numberOfMonths, percent) {
    // write code here
    let goals = [];
    let currentProduction = startProduction;
    for (let i = 0; i < numberOfMonths; i++){
      let addedPercent = currentProduction * (percent / 100)
      addedPercent.toFixed(2)
      currentProduction = Math.floor(currentProduction + addedPercent)
      goals.push(Math.floor(currentProduction))
    }
  
  
    return goals
}

console.log(getPlan(20, 6, 67))
  