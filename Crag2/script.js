var matrix = []
var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var mardArr = [];

var side = 80;

function setup() {
    for (let i = 0; i < 50; i++) {
        matrix.push([])
        for (let j = 0; j < 50; j++) {
            let c = random([0, 0, 0, 0, 1, 2, 2, 2, 2, 3, 4]);
            matrix[i].push(c);
        }
    }


    frameRate(8);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                const gr = new Grass(j, i);
                grassArr.push(gr);
            }
            else if (matrix[i][j] === 2) {
                const eater = new GrassEater(j, i);
                grassEaterArr.push(eater);
            }
            else if (matrix[i][j] === 3) {
                const gishatich = new Gishatich(j, i);
                gishatichArr.push(gishatich);
            }
            else if (matrix[i][j] === 4) {
                const mard = new Mard(j, i);
                mardArr.push(mard);
            }
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if(matrix[y][x] == 3){
                fill("red");
            }
            else if(matrix[y][x] == 4){
                fill("blue");
            }

            rect(x * side, y * side, side, side);


            // fill("blue")
            // text(x + " " + y, x * side + side / 2, y * side + side / 2)
        }
    }

    for (let i in grassArr) {
        grassArr[i].mul();
    }
    for (let i in gishatichArr) {
        gishatichArr[i].mul();
        gishatichArr[i].eat();
        gishatichArr[i].die();

    }




    for (let i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
        grassEaterArr[i].die();
    }




    for (let i in mardArr) {
        mardArr[i].mul();
        mardArr[i].eat();
        mardArr[i].die();
    }


}