# Get guests count

Running a hotel business is not easy, especially in these uncertain times. To drum up business, Grand Mate Hotel recently revamped their website to include an online room booking feature. This is a significant improvement, as previously, guests could only book by calling hotel's phone number. However, there's a small glitch: the booking form’s input field for the number of guests was programmed as a text type. Consequently, the hotel has been receiving a wide array of responses such as 1 guest, 3, Me and my wife, Two guests, and Maybe 6.

To streamline this process, let's quickly develop the first version of the getGuestsCount function. This function will take a string input guestsInput, and return the numerical count of guests — but only if the number is stated at the beginning of the string. If not, the function should return a message that the string not a number.

Here are some examples:

getGuestsCount('Two') === 'not a number'
getGuestsCount('Just the 1') === 'not a number'
getGuestsCount('3 people') === 3
