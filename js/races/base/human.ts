/// <reference path='race.ts'/>
namespace RaceTypes {
    export class Human extends Race{
        protected raceSubtype: string;
        constructor(life:number, gender: string, raceSubtype: string) {
            super(life, gender, 'Humans');
            this.raceSubtype = raceSubtype;
        }
    }
}