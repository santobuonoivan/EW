/// <reference path='./../base/gnomo.ts'/>
namespace Races {
    export class RockGnomo extends RaceTypes.Gnomo{
        constructor(life:number, gender: string) {
            super(life, gender, 'RockGnomo');
        }
    }
}