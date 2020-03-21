/// <reference path='race.js'/>
export class Dwarf extends Race{

    raceSubtype;

    constructor(life, gender, raceSubtype) {
        super(life, gender, 'Dwarf');
        this.raceSubtype = raceSubtype;
    }
}
