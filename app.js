//* Creation of basic containers.
let aSection = document.createElement('section');  // ? aSection is used as the parent element for blackSquare class elements throughtout this code for flex purposes.
let aButton = document.createElement('button');
let buttonText = document.createTextNode('Add Square');
aButton.appendChild(buttonText);

//* Loads the basic containers when the DOMContent is Loaded
window.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(aButton);
    document.body.appendChild(aSection);
});

//* Performs the basic functions of the program.
aButton.addEventListener('click', function () {

    divCreation(); // Creates a divs as children within the parent section, and gives them a class, and an id. 

    //* Retrieves all elements of class blackSquare.
    let colorizor = document.querySelectorAll('.blackSquare');
    let atomizor = document.querySelectorAll('.blackSquare');
    let toolTipDisplay = document.querySelectorAll('.blackSquare');
    let toolTipRemove = document.querySelectorAll('.blackSquare');

    //* Generates random background colors when a square is click once.
    colorizor.forEach(function (colorizor) {
        colorizor.addEventListener('click', colorRandom);
    });
    //* Removes and checks elements to the right and the left of the double clicked square, updates ids.
    atomizor.forEach(function (atomizor) {
        atomizor.addEventListener('dblclick', elementMunip);
    });
    //*Displays a tooltip when the mouse hovers over a square.
    toolTipDisplay.forEach(function (toolTipDisplay) {
        toolTipDisplay.addEventListener('mouseover', displayToolTip);
    });
    //* Removes a tooltip when the mouse leaves a square.
    toolTipRemove.forEach(function (toolTipRemove) {
        toolTipRemove.addEventListener('mouseout', removeToolTip);
    });

});
//* Defines a const array of color strings, gets 1 out of the 10 for the background.
function colorRandom(e) {
    const aColor = ['blue', 'red', 'green', 'aqua', 'lime', 'brown', 'purple', 'navy', 'salmon', 'goldenrod', 'orange', 'pink'];
    let z = Math.floor(Math.random() * 12);
    e.target.style.background = aColor[z];
}

// * Checks squares and removes a square to the right and the left, updates ids when done.
function elementMunip(a) {
    let match = 0;
    let check = a.target.id;            //? Gets the id of the double clicked element.
    let n = Number(check);              //? Converts the id value to a number.
    let squares = aSection.children;    //? Gets the children of the parent element.
    //* Checks to see if the target id is even.
    if (n % 2 === 0) {
        for (x = 0; x < squares.length; x++) {
            console.log("Checking even..."); //? Debug Code.
            if (n === x) {
                match = squares[x]; //? Since x starts at 0, upon reaching the condition it will remove the next element to right of the double click
                match.remove();
                console.log("found an even match!"); //? Debug Code.
                break;
            }
        }
        //* If the target has no match within squares (null value) no square to right.
        if (match === 0) {
            alert('No square to the right!'); 
        }
    }
    //* Checks to see if the target id is odd.
    else if (n % 2 !== 0) {
        //* Removes the match to left of the target.
        for (x = 0; x < squares.length; x++) {
            console.log("Checking Odd..."); //? Debug Code.
            if (n === x+1 && n !== 1) {
                match = squares[x - 1];
                match.remove();
                console.log("found an odd match!"); //? Debug Code.
                break;
            }
        }
        //* Logic verifies that this is the first blackSquare.
        if (match === 0 && n === 1) {
            alert('No square to the left!');
            match = 1;
        }
    }
    //* Resets the ids of all children of aSection after the removal of a child.
    //! Comment this out if you would like a bit more ease when trying to tell which squares have been removed.
    //! WARNING: Double click remove will eventually bug out due to having multiple counts of the same id without this reset.
    for (let y = 0; y < squares.length; y++) {
        squares[y].id = y + 1;
    }
}
//* Creates a div and adds a class, places it within aSection(parent for flex) and gives the div an ID.
function divCreation() {
    let aDiv = document.createElement('div');
    aDiv.className = 'blackSquare';
    aSection.appendChild(aDiv);
    aDiv.id = aSection.children.length;
}

//* Displays a ToolTip Text when the mouse is inside the square based on the squares ID.
function displayToolTip(a) {
    let aTextNode = document.createTextNode(a.target.id);
    a.target.appendChild(aTextNode);
}
//* Removes a Tooltip Text Node when mouse is moved outside of the square.
function removeToolTip(a) {
    a.target.textContent = '';
}