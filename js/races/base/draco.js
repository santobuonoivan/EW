/// <reference path='race.js'/>

export class Draco extends Race{

    raceSubtype;
    
    constructor(life, gender, raceSubtype) {
        super(life, gender, 'Draco');
        this.raceSubtype = raceSubtype;
    }
}
