/// <reference path='./../base/human.ts'/>
namespace Races {
    export class Rashemi extends RaceTypes.Human{
        constructor(life:number, gender: string) {
            super(life, gender, 'Rashemi');
        }
    }
}