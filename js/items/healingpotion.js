///<reference path='./items.js' />
   
export class HealingPotion extends Item{

    cant;

    constructor(name, code, description, cant ) {

        super(name,code,description);
        this.cant = cant;
    }

    use(){
        return this.cant;
    }

}
