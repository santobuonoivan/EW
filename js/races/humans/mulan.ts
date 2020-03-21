/// <reference path='./../base/human.ts'/>
namespace Races {
    export class Mulan extends RaceTypes.Human{
        constructor(life:number, gender: string) {
            super(life, gender, 'Mulan');
        }
    }
}