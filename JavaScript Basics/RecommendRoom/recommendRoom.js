/**
 * @param {number} adultsCount
 * @param {number} childrenCount
 * @param {number} babiesCount
 *
 * @returns {string}
 */
function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    // write code here

    const totalPeople = adultsCount + childrenCount + babiesCount

    // 4-bed?
    // total people = 4
    if (totalPeople < 5){
        return 'small room'
    } else if (totalPeople === 5 && babiesCount > 0){
        return 'small room + extra bed'
    }

    console.log(totalPeople)
    // 8-bed?
    // total people = 8
    if (totalPeople < 9){
        return 'big room'
    } else if (totalPeople === 9 && babiesCount > 0){
        return 'big room + extra bed'
    }
  }

  console.log(recommendRoom(8))