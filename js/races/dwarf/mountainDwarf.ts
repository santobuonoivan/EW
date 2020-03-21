/// <reference path='./../base/dwarf.ts'/>
namespace Races {
    export class MountainDwarf extends RaceTypes.Dwarf{
        constructor(life:number, gender: string) {
            super(life, gender, 'MountainDwarf');
        }
    }
}