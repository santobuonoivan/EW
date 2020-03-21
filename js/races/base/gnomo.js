/// <reference path='race.js'/>
export class Gnomo extends Race{

    raceSubtype;

    constructor(life, gender, raceSubtype) {
        super(life, gender, 'Gnomo');
        this.raceSubtype = raceSubtype;
    }
}
