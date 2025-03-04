# Who's Online

Create the function whoIsOnline that categorizes friends based on their online status and activity. The function should follow these rules:

If a friend is online and their lastActivity is 10 minutes or less, they are considered "online".
If a friend is online but their lastActivity is more than 10 minutes ago, they are considered "away".
If a friend's status is "offline", they are considered "offline".
The function should return an object categorizing friends into "online", "offline", and "away" based on these conditions.
Here's a step-by-step guide on how the function works:

Initialize an empty object to store the categorized statuses.
Iterate over the input array of friends.
For each friend, check their status and lastActivity to determine their category.
Update the object with the friend's username under the appropriate category. If the category doesn't exist in the object, create it.
Return the object containing the categories and their respective lists of usernames.

<https://app.knowely.com/study/full-stask-dev-en/js-basics-extended-en/js-extended-extra?section=practice&testTaskSlug=js_who_is_online&learnItemsFilter=All>
