/**
 * @param {string|number} maxSolved
 * @param {string|number} romanSolved
 *
 * @returns {string}
 */
// write code here

function getWinner(maxSolved, romanSolved){
    switch (true){
        case maxSolved == romanSolved:
            return 'Roman and Maxim are the winners!!!'

        case maxSolved < romanSolved:
            return 'Roman is the winner!!!'

        case maxSolved > romanSolved:
            return 'Max is the winner!!!'
        
        case typeof maxSolved === string && typeof romanSolved === string:
            return Number(maxSolved) > Number(romanSolved) ? 'Max is the winner!!!' : 'Roman is the winner!!!'
    }

}