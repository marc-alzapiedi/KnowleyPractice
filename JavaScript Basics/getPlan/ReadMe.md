# And now it's time to ramp up our robot production

Let's implement the getPlan function, which accepts three arguments:

startProduction — the current number of robots produced per month;
numberOfMonths — the time frame for production growth;
percent — the expected monthly increase in production percentage.
This function should return an array representing production goals for the specified numberOfMonths. To illustrate, consider this example. Suppose we have startProduction = 200, numberOfMonths = 3, and percent = 50:

the first month's goal is 200 + 50% = 300 robots;
the second month's goal is 300 + 50% = 450 robots;
the third month's goal is 450 + 50% = 675 robots.
Thus, the resulting array would be [300, 450, 675].

⚠️ The production goal for each subsequent month is based on the previous month's output. If the calculated number of robots for any month is fractional, round it down using Math.floor.

Additional examples:

getPlan(10, 4, 30); // [13, 16, 20, 26]
getPlan(1000, 6, 20); // [1200, 1440, 1728, 2073, 2487, 2984]

Hint
1. Start by creating an empty goals array to store the results.
2. Initialize a `currentProduction` variable with the value of `startProduction`.
3. Iterate through each month, up to the `numberOfMonth`s.
4. With each iteration, increase `currentProduction` by the specified percent, and add this value to the goals array.

