/// <reference path='race.ts'/>
namespace RaceTypes {
    export class Elf extends Race{
        protected raceSubtype: string;
        constructor(life:number, gender: string, raceSubtype: string) {
            super(life, gender, 'Elf');
            this.raceSubtype = raceSubtype;
        }
    }
}