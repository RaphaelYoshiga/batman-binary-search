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

const maxY = H -1;

var newX = X0;
var newY = Y0;

var lowY = 0;
var highY = 0;

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    console.error(bombDir);

    setNewY(bombDir);

    if (bombDir.includes("R"))
        newX = W - 1;

    if (bombDir.includes("L"))
        newX = parseInt(newX / 2) - 1;

    console.log(`${newX} ${newY}`);

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // the location of the next window Batman should jump to.

}

function setNewY(bombDir) {
    if (bombDir.includes("D"))
    {
        lowY = newY;
        newY = newY + parseInt((maxY - newY)/2) + 1        
    }
    
    if (bombDir.includes("U"))
    {
        newY = newY - parseInt((newY - lowY) / 2);
        highY = newY;
        
    }

    if (newY >= H)
        newY = H -1;
}
