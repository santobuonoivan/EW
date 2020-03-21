/// <reference path='race.js'/>
export class Medium extends Race{

    raceSubtype;

    constructor(life, gender, raceSubtype) {
        super(life, gender, 'Medium');
        this.raceSubtype = raceSubtype;
    }
}
