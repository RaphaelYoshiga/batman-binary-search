/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

const maxX = W - 1;

var newX = X0;
var newY = Y0;

var lowY = 0;
var highY = H - 1;

var lowX = 0;
var highX = 0;

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    console.error(bombDir);

    setNewY(bombDir);
    setNewX(bombDir);

    console.log(`${newX} ${newY}`);
}

function setNewY(bombDir) {
    if (bombDir.includes("D")) {
        lowY = newY;
        newY = newY + divideByTwoRoundingUp(highY - newY);
        console.error(highY);
    }

    if (bombDir.includes("U")) {
        highY = newY;
        newY = newY - divideByTwoRoundingUp(newY - lowY);        
    }

    if (newY >= H)
        newY = H - 1;
}

function divideByTwoRoundingUp(x) {
    return Math.ceil(x / 2);
}

function setNewX(bombDir) {
    if (bombDir.includes("R")) {
        lowX = newX;
        newX = newX + divideByTwoRoundingUp((maxX - newX));
    }

    if (bombDir.includes("L")) {
        highX = newX;
        newX = lowX + divideByTwoRoundingUp(newX - lowX);
    }

    if (newX >= W)
        newX = W - 1;
}
