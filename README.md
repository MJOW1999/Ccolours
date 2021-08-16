# Ccolours

> Inspired by [coolors](https://coolors.co/), take a look at my random colour generator: [**Ccolours**](https://mjow1999.github.io/Ccolours/)

## Table of contents
* [Technologies](#technologies)
* [Inspiration](#inspiration)
* [Process](#process)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## Technologies
* HTML5
* CSS
* JavaScript

## Inspiration
Inspired by the colour pallete generator coolors, I wanted to make my own version.  

## Process
* My main process came in 4 steps: 1. Generate random colours. 2. Return the colours, 3. Change each row 4. Save your colours
* 1. **Generate random colours**: Created the `randomColour()` function which chooses a random number from the 16,777,216 possibilities.
* 2. **Return the colours**: Stored the colours in the `currentColours` array and updated this as a new colours are generated. Returned live in a new section with the text being an inverted version of the colour
* 3. **Change each row**: When yo click each colour strip, the `randomColour()` function runs and the relevant `currentColours` index is updated as well as the results
* 4. **Save your colours**: The final and most difficult part of the process. I opted for screenshotting the colour strips and having the user save it to their device.

## Features
* Generate random colours along with their rgb colour values
* Choice of light and dark colour themes
* Can select an individual row to change
* Allows you to save your finished colour schemes

To-do list:
* Add a different way to save your work
* Add a 3D buttonfor the BRB (_not necessary_)
* *Aspirational*: Send the colour scheme to the user by email

## Status
Project is: _completed_

## Contact
Created by [@MJOW1999](https://github.com/MJOW1999)
Feel free to contact me: 
* Email: michael.jow.williams@gmail.com
* LinkedIn: [Michael Williams](https://www.linkedin.com/in/michael-williams-17a9b81a0)

Also check out my [Twitter](https://twitter.com/michWills99) for more related and not so related content 🤠
