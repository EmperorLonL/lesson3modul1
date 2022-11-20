class Parent{
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }

    newCellfunc (char1, char2, char3) { 
        let emptyCells1 = this.chooseCell(char1);
        let emptyCells2 = this.chooseCell(char2);
        let emptyCells3 = this.chooseCell(char3);
        let emptyCells = [...emptyCells1, ...emptyCells2, ...emptyCells3]
        let newCell = random(emptyCells);
        return newCell;
    }

    die(Arr){
        matrix[this.y][this.x] = 0;        
            for (var i in Arr) {
                if (this.x == Arr[i].x && this.y == Arr[i].y) {
                    Arr.splice(i, 1);
                    break;
                }
            }
    }

    mul(newCell, energy, index, Arr1, Arr2) {  
        if (newCell && this.energy >= energy) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = index;

            for (var i in Arr1) {
                if (newX == Arr1[i].x && newY == Arr1[i].y) {
                    Arr1.splice(i, 1);
                    break;
                }
            }
            for (var i in Arr2) {
                if (newX == Arr2[i].x && newY == Arr2[i].y) {
                    Arr2.splice(i, 1);
                    break;
                }
            }
        }
    }




}