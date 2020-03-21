namespace Items {
    export class Item {

        protected name: string;
        protected code: string;
        protected description: string;        
        
        constructor(name: string, code: string, description: string) {
            this.name = name;
            this.code = code;
            this.description =description;
        } 
    }
}