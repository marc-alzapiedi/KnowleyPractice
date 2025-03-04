/**
 * @param {string} str
 *
 * @returns {string[]}
 */
function splitString(str) {
    // write code here
    
    let strToSplit = ''

    if(str.length === 0){
        return []
    }
   
    for (let i = 0; i < str.length; i++){

        if(i === 0){

            strToSplit += str[i]
            continue
          
        }
        if((i % 2 === 0)){
            strToSplit += '.' + str[i]
            continue
        }

        strToSplit += str[i]        
    }

    console.log(strToSplit, strToSplit.length % 2)
    if(str.length % 2 !== 0){
        strToSplit = strToSplit + '_'
    }



    // console.log(strToSplit)

    return strToSplit.split('.')
    
}

console.log(splitString(''))