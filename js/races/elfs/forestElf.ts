/// <reference path='./../base/elf.ts'/>
namespace Races {
    export class ForestElf extends RaceTypes.Dwarf{
        constructor(life:number, gender: string) {
            super(life, gender, 'ForestElf');
        }
    }
}