# Switch

We'd like to program a robot so that it translates simple commands into movement coordinates. Your task is to write a getDirection function. It should take a direction command as a string and return the movement coordinates as a string in the format hor=x ver=y.

Here's how the commands translate:

forward becomes hor=0 ver=1
back becomes hor=0 ver=-1
right becomes hor=1 ver=0
left becomes hor=-1 ver=0
stop becomes hor=0 ver=0
If the robot gets a command it doesn't recognize, return hor=0 ver=0. And remember, It hasn't learned conditional operators yet, so you need to use a switch case in your function!

Here are two examples:

If the command is forward, the function should return hor=0 ver=1.
If the command is unknown, like turn around, the function should return hor=0 ver=0.
