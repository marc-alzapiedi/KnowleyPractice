# Recommend Room

The hotel owner erected a new building with 4-bed rooms only. Hence, guests now have the possibility to choose between 8-bed and 4-bed rooms.

Create a new function, recommendRoom, that:

Takes the number of guests:
Adults — adultsCount.
Children — childrenCount.
Babies — babiesCount.
Returns the string 'small room', if there are only 4 guests (+ optional 1 baby), otherwise — big room.
Input and output examples:

recommendRoom(2, 2, 1) === 'small room + extra bed'
recommendRoom(2, 1, 1) === 'small room'
recommendRoom(3, 2) === 'big room'
recommendRoom(3, 0, 2) === 'small room + extra bed'
recommendRoom(7, 0, 2) === 'big room + extra bed'
recommendRoom(8) === 'big room'
💡 The function you've created the last time still works, so don't worry about the data validity. Guests whom we recommend rooms to meet all hotel rules.

<https://app.knowely.com/study/full-stask-dev-en/js-basics-extended-en/js-logical-operators-en?section=practice&testTaskSlug=js_recommend_room&learnItemsFilter=All&theoryId=602>
