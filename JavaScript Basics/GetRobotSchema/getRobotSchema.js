/**
 * @param {Object} robot
 *
 * @returns {Object}
 */
function getRobotSchema(robot) {
    // write code 
    let result = {}

    Object.entries(robot).forEach((entry) => {
        result[entry[0]] = typeof entry[1]
    })

    return result
}

console.log(getRobotSchema({
    version: 16,
    name: 'Cleaner 3000',
    released: true,
    author: { name: 'Vlad' },
  }))