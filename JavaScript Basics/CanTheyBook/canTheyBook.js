/**
 * @param {number} adultsCount
 * @param {number} childrenCount
 *
 * @returns {boolean}
 */
function canTheyBook(adultsCount, childrenCount) {
    // If the customer doesn't specify the number of adults or children, it's assumed to be 0

    adultsCount || 0
    childrenCount || 0


    
    // A room can only fit up to 8 people
    // adultsCount + childrenCount > 8 ? false : true


    // There must be at lest 1 adult
    // adultsCount === 0 ? false : true

    // A maximum of 2 children per adult is allowed
    // 1 - 2 = T, 2 - 2 = T, 3 - 2 = T, 1 - 3 = F, 2 - 3 = T, 2 - 5 = F
    // childrenCount - adultsCount <=2 ? 'true' : 'false'

    return adultsCount + childrenCount <= 8 || adultsCount !== 0 || childrenCount - adultsCount <= 2




}