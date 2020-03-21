/// <reference path='race.ts'/>
namespace RaceTypes {
    export class Medium extends Race{
        protected raceSubtype: string;
        constructor(life:number, gender: string, raceSubtype: string) {
            super(life, gender, 'Medium');
            this.raceSubtype = raceSubtype;
        }
    }
}