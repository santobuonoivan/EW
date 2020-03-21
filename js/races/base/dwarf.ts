/// <reference path='race.ts'/>
namespace RaceTypes {
    export class Dwarf extends Race{
        protected raceSubtype: string;
        constructor(life:number, gender: string, raceSubtype: string) {
            super(life, gender, 'Dwarf');
            this.raceSubtype = raceSubtype;
        }
    }
}