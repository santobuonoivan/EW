namespace MyGame {

    export class Player {
        private itsAlive: boolean;
        private isPoisoned: boolean;
        private isBurned: boolean;
        
        private name: string;
        private race: string;
        private life: number;

        constructor(name: string, race: string, life: number = 100 ) {
            this.name = name;
            this.race = race;
            this.itsAlive = true;
            this.isPoisoned = false;
            this.isBurned = false;
            this.life = life;

        }        
        public get_name(): string{
            return this.name;
        }
        public get_race(): string{
            return this.race;
        }
        public get_life(): number{
            return this.life;
        }
        public get_attack(attack: number){
            this.life -= attack;
            this.setAlive();
        }
        public getHealing(healing: number){
            this.life += healing;
        }
        private setAlive(){
            this.itsAlive = this.life > 0; 
        }

    }
}
