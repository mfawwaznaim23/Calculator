# Calculator

A browser-based calculator built with **HTML, CSS, and JavaScript** as
part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## Preview

<img width="1600" height="793" alt="WhatsApp Image 2026-08-31 at 11 25 55 AM" src="https://github.com/user-attachments/assets/de8a90c9-8da4-422f-82a9-ae330b891065" />


## Live Demo

[View the Live Demo]([YOUR_LIVE_DEMO_LINK](https://mfawwaznaim23.github.io/Calculator/))

## About the Project

This project is a functional calculator that allows the user to perform
basic arithmetic operations directly in the browser.

The main focus of this project was learning how to combine **JavaScript
logic, DOM manipulation, event listeners, and CSS Flexbox** to create an
interactive application.

Rather than having the calculator's display completely predefined in
HTML, JavaScript dynamically creates and updates elements in the result
area as the user interacts with the calculator.

## Features

-   Addition, subtraction, multiplication, and division
-   Multi-digit number input
-   Multiple calculations in sequence
-   Dynamic display of entered numbers and operators
-   Score-free calculator interface with a clear (`C`) button
-   Responsive layout for smaller screens

## JavaScript Functionality

JavaScript controls the calculator's behavior and connects the buttons
to the calculator logic.

### Event Listeners

The number and operator buttons are selected with `querySelectorAll()`
and assigned click event listeners using `addEventListener()`.

When a number button is clicked, the `num()` function is called. When an
operator button is clicked, the `operator()` function is called.

This connects the buttons in the HTML to the JavaScript functionality
behind the calculator.

### Dynamic Display and DOM Manipulation

The calculator display is updated using DOM manipulation.

When the user enters a number or operator, JavaScript creates a new
`<div>` with `createElement()`, sets its content with `textContent`, and
adds it to the result box with `appendChild()`.

This lets the display be built dynamically as the user presses buttons.

### Managing Calculator State

JavaScript variables keep track of the first number, second number, and
selected operators. This lets the program determine which number is
currently being entered and which operation should be performed.

### Performing Calculations

The `operator3()` function performs the arithmetic using a `switch`
statement for:

-   `+` addition
-   `-` subtraction
-   `*` multiplication
-   `/` division

The entered values are converted from strings to numbers with `Number()`
before the calculation.

### Chaining Calculations

The calculator can continue with another operation after calculating a
result. The current result is stored as the next first value, while the
newly selected operator becomes the operation for the next calculation.

### Clearing the Calculator

The `C` button removes the dynamically created display elements and
resets the stored calculator values, allowing a new calculation to
begin.

## HTML & CSS

HTML provides the calculator structure, including the display, number
buttons, operator buttons, and clear button.

CSS controls the visual design and layout.

### Flexbox

I used **Flexbox** to organize and position the calculator.

The main page uses Flexbox to center the calculator both horizontally
and vertically:

``` css
display: flex;
justify-content: center;
align-items: center;
```

The display uses Flexbox to align the entered values toward the right
side, similar to a traditional calculator.

The button container also uses Flexbox with `flex-wrap: wrap`, allowing
the buttons to form rows within the calculator.

### Responsive Design

The project includes a media query for screens below `600px`:

``` css
@media (max-width: 600px)
```

The calculator changes its width and height on smaller screens so the
interface can fit more comfortably.

## How JavaScript, HTML, and CSS Work Together

This project gave me practice connecting the three main parts of a web
application.

**HTML** provides the calculator's structure and buttons.

**CSS** controls the appearance, positioning, button layout, colors, and
responsive behavior.

**JavaScript** makes the calculator functional by responding to clicks,
tracking numbers and operators, performing calculations, dynamically
updating the display, and clearing the calculator.

For example, clicking a number sends that button's value into
JavaScript, which adds it to the current number and creates a new
display element. Selecting an operator stores the operation, and
pressing `=` causes JavaScript to perform the calculation and display
the result.

## What I Learned

-   Using JavaScript to create an interactive application
-   Connecting HTML buttons to JavaScript with event listeners
-   DOM manipulation
-   Creating elements dynamically with `createElement()`
-   Adding elements with `appendChild()`
-   Updating content with `textContent`
-   Selecting elements with `querySelector()` and `querySelectorAll()`
-   Using `forEach()` with collections of elements
-   Using conditional statements and `switch`
-   Converting strings to numbers with `Number()`
-   Managing application state with JavaScript variables
-   Using functions to organize calculator logic
-   Using Flexbox for layout and alignment
-   Using media queries for responsive design
-   Combining HTML, CSS, and JavaScript into a functional web
    application

## How to Run Locally

1.  Clone this repository.
2.  Open the project folder.
3.  Open `index.html` in your browser.
4.  Use the number and operator buttons to perform calculations.

## Credits

This project was created as part of [The Odin
Project](https://www.theodinproject.com/) curriculum.
