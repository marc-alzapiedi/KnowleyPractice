/**
 * @param {string} direction
 *
 * @returns {string}
 */

function getDirection(direction) {
    switch (true) {
        case direction === 'forward':
            return 'hor=0 ver=1'
        
        case direction === 'back':
            return 'hor=0 ver=-1'
        
        case direction === 'right':
            return 'hor=1 ver=0'

        case direction === 'left':
            return 'hor=-1 ver=0'

        case direction === 'stop':
            return 'hor=0 ver=0'

        default:
            return 'hor=0 ver=0'   
    }
}

console.log(getDirection('Yer'))