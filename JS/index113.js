let base = 5;
let height = 100;
let myPerimeter = base + height;



function getShapePerimeter () {
    if (base > 100 || height > 100){
        console.log(`The perimeter is too large!`);
    }
    else {
        if (base == height) {
            console.log(`The shape is a square and the perimeter is ${myPerimeter}`);
        }
        else {
            console.log(`The shape is a rectangle and the perimeter is ${myPerimeter}`);
        }
    }
}

getShapePerimeter(base, height);