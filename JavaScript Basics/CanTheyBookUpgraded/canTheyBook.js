/**
* @param {number} adultsCount
* @param {number} childrenCount
* @param {number} babiesCount
*
* @returns {boolean}
*/
function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount) {
    // write code here

    // Babies fit in normal beds, so there can be more than 1 baby
    // A room can fit only 8 people and 1 baby.
    // adultsCount + childrenCount <= 8 && adultsCount + childrenCount + babiesCount <= 9


    // There must be at lease 1 adult.
    // adultsCount >= 1

    // A maximum of 2 children per adult is allowed OR 1 child and 1 baby
    // 4A - 2C = 2 T, 5A - 2C = 3 T, 2A - 3C = -1 T, 3A - 3C = 0, T, 2A - 4C = 2 T, 2A - 5C = 3 
    // if (adultsCount <= childrenCount) => Math.abs(adultsCount - childrenCount) <= 2
    // adultsCount - childrenCount >= -2 || adultsCount - (childrenCount + babiesCount) >= -2




    // If the customer doesn't specify the number of adults or children, it is assumed to be 0

    return adultsCount + childrenCount <= 8 && adultsCount + childrenCount + babiesCount <= 9 && adultsCount >= 1 && adultsCount - childrenCount >= -2 && adultsCount - (childrenCount + babiesCount) >= -2
 
}