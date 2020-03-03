# DOM DOM DOMMMMMMM!
Covalence

## Info
* To practice using DOM functions, you will not write any HTML in this lab
* You have been given a project skeleton with a basic HTML file. Do not make any changes to the body of the HTML file other than adding a script import.
* Create a JavaScript file and import it into your html file
* Create a CSS stylesheet and import it into your html file

## Objectives
* When the browser first loads, use the DOM to create and insert a button labeled `Add Square` into the body
* When the button is clicked, a new `div` should be added to the page
    * The `div` should be a black square
    * The squares should flow horizontally across the page
        * When there is no more room, they should wrap to the next line
    * All of these `div` elements added to the page should share a single class name of your choosing
    * Each `div` should have an `id` with a numerical value equivalent to the number of squares that are in the page when the `Add Square` button is clicked
        * Ex: There are already 7 squares on the page. When the button is clicked, another square should be added to the page, and it should have `id="7"`.
        * In this lab, you may run into scenarios where you will have multiple elements with the same `id`; that is fine.
    * When hovering over a square, the value of the square's `id` should display centered in the square, and disappear when the cursor is no longer over the square
    * When a square is clicked, it should change to a random background color (You can randomly choose from a set of colors you predefine if you wish)
    * When a square is double clicked, the following should occur:
        * If the `id` of the square is even:
            * The square after the clicked square should be removed from the page
            * If there isn't a square after the clicked square, display an alert indicating so
        * If the `id` of the square is odd:
            * The square before the clicked square should be removed from the page
            * If there isn't a square before the clicked square, display an alert indicating so

## Hints
* You will be using DOM functions to complete this portion of the lab
* Remember that elements can be added to other elements
    * document.body.appendChild(someElement);
    * someOtherElement.appendChild(anotherElement);
* All of the squares have the same class name
    * You can use that to give them a uniform appearance using CSS
    * You can also use that to find out how many squares are on the screen (think about the DOM functions)