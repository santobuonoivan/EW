/// <reference path='race.js'/>
export class Elf extends Race{

    raceSubtype;

    constructor(life, gender, raceSubtype) {
        super(life, gender, 'Elf');
        this.raceSubtype = raceSubtype;
    }
}
