class GrassEater extends Parent{
    constructor(x, y, index) {
        super(x, y, index);
        this.n = 0;
        this.k = 0;
    }

    mul() {
        let newCell = super.newCellfunc(0, 1);
        if (newCell && this.n>=5) {
            this.n = 0;
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


    eat() {
        let newCell = super.newCellfunc(1);
        if (newCell) {
            if(this.n<=5){
                this.n++;
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
            this.k++;
        }
        else{
            this.move()
            this.n--;
        }
    }

    die() {
        if (this.k == -5) {
            super.die(grassEaterArr);
        }
    }

    move() { 
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if(this.k>=-5){
            this.k--;
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
