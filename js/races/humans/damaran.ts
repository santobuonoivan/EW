/// <reference path='./../base/human.ts'/>
namespace Races {
    export class Damaran extends RaceTypes.Human{
        constructor(life:number, gender: string) {
            super(life, gender, 'Damaran');
        }
    }
}