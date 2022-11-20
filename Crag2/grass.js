class Grass extends Parent{
    constructor(x, y) {
        super(x, y);
        this.multiply = 0;
    }


    mul () {
        let nCell = super.newCellfunc(0);
        this.multiply++;
        if(nCell && this.multiply >= 4){
            let newX = nCell[0];
            let newY = nCell[1];
            matrix[newY][newX] = 1;
 
            let newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }
}