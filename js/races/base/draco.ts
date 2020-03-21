/// <reference path='race.ts'/>
namespace RaceTypes {
    export class Draco extends Race{
        protected raceSubtype: string;
        constructor(life:number, gender: string, raceSubtype: string) {
            super(life, gender, 'Draco');
            this.raceSubtype = raceSubtype;
        }
    }
}