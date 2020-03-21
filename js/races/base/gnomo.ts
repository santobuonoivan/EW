/// <reference path='race.ts'/>
namespace RaceTypes {
    export class Gnomo extends Race{
        protected raceSubtype: string;
        constructor(life:number, gender: string, raceSubtype: string) {
            super(life, gender, 'Gnomo');
            this.raceSubtype = raceSubtype;
        }
    }
}