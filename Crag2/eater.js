class GrassEater extends Parent{
    constructor(x, y) {
        super(x, y);
        this.energy = 2;
    }

    mul() {
        let newCell = super.newCellfunc(0, 1);
        if (newCell && this.energy>=4) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 2;

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            let newGrassEater = new GrassEater(newX, newY, 2);
            grassEaterArr.push(newGrassEater);
        }
    }

    // mul(){
    //     let newCell = super.newCellfunc(0, 1);
    //     console.log(newCell);
    //     super.mul(newCell, 4, 2, grassArr);
    //     let newGrassEater = new GrassEater(newCell[0], newCell[1]);
    //     grassEaterArr.push(newGrassEater);
    // }


    eat() {
        let newCell = super.newCellfunc(1);
        if (newCell) {
            if(this.energy<5){
                this.energy++;
            }
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else{
            this.move()
        }
    }

    die() {
        if (this.energy<=0) {
            super.die(grassEaterArr);
        }
    }

    move() { 
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if(this.energy>0){
            this.energy--;
        }
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.y = newY;
            this.x = newX;
        }
    }
}
