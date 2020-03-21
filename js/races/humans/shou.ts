/// <reference path='./../base/human.ts'/>
namespace Races {
    export class Shou extends RaceTypes.Human{
        constructor(life:number, gender: string) {
            super(life, gender, 'Shou');
        }
    }
}