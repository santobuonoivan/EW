export class Player {
    itsAlive;
    isPoisoned;
    isBurned;
    positionX;
    positionY;      
    name;
    race;
    life;

    constructor(name, race, life = 100, positionX,positionY ) {
        this.name = name;
        this.race = race;
        this.itsAlive = true;
        this.isPoisoned = false;
        this.isBurned = false;
        this.life = life;
        this.positionX = positionX;
        this.positionY = positionY;

    }        
    get_name(){
        return this.name;
    }
    get_race(){
        return this.race;
    }
    get_life(){
        return this.life;
    }
    get_attack(attack){
        this.life -= attack;
        this.setAlive();
    }
    getHealing(healing){
        this.life += healing;
    }
    setAlive(){
        this.itsAlive = this.life > 0; 
    }
}