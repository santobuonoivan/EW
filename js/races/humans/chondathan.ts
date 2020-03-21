/// <reference path='./../base/human.ts'/>
namespace Races {
    export class Chondathan extends RaceTypes.Human{
        constructor(life:number, gender: string) {
            super(life, gender, 'Chondathan');
        }
    }
}