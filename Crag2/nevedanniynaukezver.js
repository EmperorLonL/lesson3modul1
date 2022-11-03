class Mard {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getNewCordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCordinates();
        let foundGrass = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    foundGrass.push(this.directions[i]);
                }
            }

        }
        return foundGrass;
    }


    mul() {
        let redCells = this.chooseCell(3);
        let newCell = random(redCells);
        if (newCell && this.energy == 10) {
            this.energy = 5;
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;

            for (var i in gishatichArr) {
                if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }

            let newmard = new Mard(newX, newY, 2);
            mardArr.push(newmard);
        }
    }


    eat() {
        let redCells = this.chooseCell(3);
        let newCell = random(redCells);

        if (newCell) {
            if(this.energy<=10){
                this.energy++;
            }
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            for (var i in gishatichArr) {
                if (newX == gishatichArr[i].x && newY == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
        }
        else{
            this.move()
        }
    }

    die() {
        if (this.energy <= 0) {
             matrix[this.y][this.x] = 0;        
            for (var i in mardArr) {
                if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
                    mardArr.splice(i, 1);
                    break;
               }
            }

        }
    }

    move() { 
        let greenCells = this.chooseCell(1);
        let greyCells = this.chooseCell(0);
        let yellowCells = this.chooseCell(2);
        let emptyCells = [...greenCells, ...greyCells, ...yellowCells]
        let newCell = random(emptyCells);
        this.energy-=0.5;
        if (newCell && this.energy>=0) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}
