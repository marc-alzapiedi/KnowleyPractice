# Can They Book

Our friend owns a hotel. They want to automatically accept or decline incoming reservations, based on the declared guest number and hotel rules. Help us help them!

Create a function canTheyBook that:

Takes the number of adult guests, adultsCount, and children — childrenCount.
Returns true, if the reservation meets hotel rules, otherwise — false.
Here are the hotel rules:

A room can only fit up to 8 people.
There must be at least 1 adult.
A maximum of 2 children per adult is allowed.
If the customer doesn't specify the number of adults or children, it's assumed to be 0.
Input and output examples:

canTheyBook(0, 2) === false - 0 adults, 4 children. Violation of rules.
canTheyBook(2, 4) === true - 2 adults, 4 children. Reservation is allowed.
canTheyBook(2) === true - 2 adults. Reservation is allowed.
canTheyBook(9) === false - 9 adults. Violation of rules.

<https://app.knowely.com/study/full-stask-dev-en/js-basics-extended-en/js-logical-operators-en?learnItemsFilter=All&section=practice&theoryId=602&testTaskSlug=js_can_they_book>
