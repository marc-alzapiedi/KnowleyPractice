# Calculate Guests

This morning we've received a letter from the Grand Mate Hotel.

Long story short, the programmers have not changed the type of field "number of guests" in the booking form and they still receive the strings like Room for 4 guests, please, Exactly 2 people, Meh, I'll be alone. Managers suffer because they are forced to process such requests manually.

I think we can help them. Let's improve the function calculateGuests to make it look for numbers in the middle of the string guestsInput. If it is still impossible to determine the number of guests, or this number is equal to 0 - return not a number.

Requirements:

Get only integers from string, but if there is a float number, the fraction should be omitted.
If there are two separate integers in a string, get only the first one.

<https://app.knowely.com/study/full-stask-dev-en/js-basics-extended-en/js-working-with-strings-en?section=practice&testTaskSlug=js_calculate_guests&learnItemsFilter=All&theoryId=1973>
