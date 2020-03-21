/// <reference path='race.js'/>
export class Human extends Race{

    raceSubtype;

    constructor(life, gender, raceSubtype) {
        super(life, gender, 'Humans');
        this.raceSubtype = raceSubtype;
    }
}
