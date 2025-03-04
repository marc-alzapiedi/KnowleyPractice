/**
 * @param {Object[]} friends
 *
 * @returns {Object}
 */
function whoIsOnline(friends) {
    // write code here

    // console.log(friends)
    let result = {}
    let online = []
    let offline = []
    let away = []
    friends.forEach((obj) => {
        // console.log(obj.lastActivity)
        if(obj.lastActivity <= 10){
            online.push(obj.username)
            result.online = online
        }
        if(obj.lastActivity > 10 && obj.status === 'online'){
            away.push(obj.username)
            result.away = away
        }
        if(obj.status === 'offline'){
            offline.push(obj.username)
            result.offline = offline
        }
    })
    return result

}

console.log(whoIsOnline([{
    username: 'Lucy',
    status: 'online',
    lastActivity: 11,
  }, {
    username: 'Bob',
    status: 'online',
    lastActivity: 12,
  },
  {
    username: 'David',
    status: 'online',
    lastActivity: 13,
  }]))