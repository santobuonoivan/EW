/// <reference path='./../base/dwarf.ts'/>
namespace Races {
    export class HillDwarf extends RaceTypes.Dwarf{
        constructor(life:number, gender: string) {
            super(life, gender, 'HillDwarf');
        }
    }
}