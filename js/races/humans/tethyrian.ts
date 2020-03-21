/// <reference path='./../base/human.ts'/>
namespace Races {
    export class Tethyrian extends RaceTypes.Human{
        constructor(life:number, gender: string) {
            super(life, gender, 'Tethyrian');
        }
    }
}