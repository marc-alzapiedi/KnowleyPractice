# Get Winner

Two contestants made it to the IT olympiad finals. Our server was supposed to announce the winner, but it malfunctioned, outputting both numbers and strings. Help us solve the issue!

Create a function getWinner that takes:

Number of tasks Max solved, maxSolved. It can be expressed as a number (e.g.: 5) or a string (e.g.: 'five').
Number of tasks Roman solved, romanSolved. It can be expressed as a number (e.g.: 5) or a string (e.g.: 'five').
It should compare the two inputs and return a string:

'Max is the winner!!!', if Max solved more tasks.
'Roman is the winner!!!', if Roman solved more tasks.
'Roman and Maxim are the winners!!!', if they completed the same number of tasks.
Here are a few examples:

getWinner(45, '42') returns 'Max is the winner!!!'.
getWinner('34', 35) returns 'Roman is the winner!!!'.
getWinner(15, '15') returns 'Roman and Maxim are the winners!!!'.

<https://app.knowely.com/study/full-stask-dev-en/js-basics-extended-en/js-type-conversion-en?learnItemsFilter=All&section=practice&theoryId=1978&testTaskSlug=js_get_winner>
