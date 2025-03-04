# Who is the Killer

Some people have been killed! To aid the police, create the function getKiller that identifies the killer based on the suspects and their encounters on the day of the murders, as well as the list of victims.

Here's how the function works:

It takes two inputs: an object suspects that lists each suspect and the people they saw that day, and an array dead containing the names of the victims.
The function should search through the suspects and find who saw all the victims that day.
If a suspect saw all the victims, return that suspect's name as the killer.
If no suspect meets the criteria, the function returns undefined.
For instance, given the suspects:

<https://app.knowely.com/study/full-stask-dev-en/js-basics-extended-en/js-extended-extra?section=practice&testTaskSlug=js_who_is_the_killer&learnItemsFilter=All>

The function should return James, because he's the only suspect who saw both Lucas and Bill. If no single suspect saw all the victims, the function returns nothing (or undefined).
