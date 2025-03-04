/**
 * @param {number} a
 * @param {number} b
 * @param {number} res
 *
 * @returns {string}
 */
function findCalculationType(a, b, res) {
    // write code here

    switch (true) {
        case a + b === res:
            return 'addition'
            
        case a - b === res:
            return 'subtraction'

        case a * b === res:
            return 'multiplication'

        case a / b === res:
            return 'division'
    }
}
