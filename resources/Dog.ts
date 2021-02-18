module MyNamespace {
    export class Dog extends MyNamespace.Animal {
        public furColor: string;

        public bark(): void {
            console.log("Bark!");
        }
        
        constructor(name: string, furColor: string) {
            super(name);
            this.furColor = furColor;
        }
    }

    export interface Youpi extends BaseInterface {
        yay: number;
        hehe: boolean;
    
        wow(): void;
    }
}