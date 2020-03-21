///<reference path='./items.ts' />
namespace Items{
    
    export class HealingPotion extends Item{

        private cant: number;

        constructor(name: string, code: string, description: string, cant: number ) {

            super(name,code,description);
            this.cant = cant;
        }

        public use(){
            return this.cant;
        }

    }
}