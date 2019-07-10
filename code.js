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

var newX= 0;
var newY = 1;

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    
    if( bombDir.includes("D"))
    {
        newY = parseInt(H - Y0 / 2);
        console.log(`0 ${newY}`);
    }
    
    if(bombDir.includes("R"))
    {
        newX = parseInt(W - X0 / 2);
        console.log(`${newX} ${newY}`);
    }
    
    else
    {
        console.log('0 0');
    }
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // the location of the next window Batman should jump to.
    
}