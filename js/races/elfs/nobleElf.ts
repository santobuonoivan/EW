/// <reference path='./../base/elf.ts'/>
namespace Races {
    export class NobleElf extends RaceTypes.Dwarf{
        constructor(life:number, gender: string) {
            super(life, gender, 'NobleElf');
        }
    }
}