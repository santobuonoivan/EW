namespace RaceTypes{
    export class Race {
        protected life: number;
        protected gender: string;
        protected raceType: string;

        constructor(life:number, gender: string, raceType: string) {
            this.life = life;
            this.gender = gender;
            this.raceType = raceType;            
        }        
    }
}