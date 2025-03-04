# Can They Book Upgraded

Remember the hotel from earlier? It now lets the guests rent out an extra bed for babies up to 2 years of age, meaning rooms can accomodate up to 8 adults and one baby.

Hence, you need to update the canTheyBook function. It should:

Take the number of guests:
Adults — adultsCount.
Children — childrenCount.
Babies — babiesCount.
Return true, if the reservation meets hotel rules, otherwise — false.
Here are the hotel rules:

A room can only fit up to 8 people + 1 baby.
There must be at least 1 adult.
A maximum of 2 children per adult is allowed OR 1 child and 1 baby.
Babies fit in normal beds, too, so there can be more than 1 baby (given all conditions are met).
If the customer doesn't specify the number of adults or children, it's assumed to be 0.
Input and output examples:

canTheyBook(2) === true — 2 adults. Reservation is allowed.
canTheyBook(2, 3, 1) === true - 2 adults, 3 children, 1 baby. Reservation is allowed.
canTheyBook(8, 0, 1) === true - 8 adults, 0 children, 1 baby. Reservation is allowed.
canTheyBook(4, 2, 3) === true - 4 adults, 2 children, 3 baby. Reservation is allowed.
canTheyBook(0, 1, 1) === false - 0 adults, 1 child, 1 baby. Violation of rules.
canTheyBook(9) === false - 9 adults. Violation of rules.
canTheyBook(8, 1) === false - 8 adults, 1 child. Violation of rules.

<https://app.knowely.com/study/full-stask-dev-en/js-basics-extended-en/js-logical-operators-en?learnItemsFilter=All&section=practice&theoryId=602&testTaskSlug=js_can_they_book_upgraded>
