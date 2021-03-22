///<reference path='Animal.ts'/>
///<reference path='IBaseInterface.ts'/>

module MyNamespace {
    export class Dog extends Animal {
        public furColor: string;
        public bark(): void {
            console.log("Bark!");
        }
        constructor(name: string, furColor: string) {
            super(name);
            this.furColor = furColor;
        }
        public getPuppies(): Array<Dog> {
            return new Array<Dog>();
        }
        public getPuppiesWithNames(): Map<string, Dog> {
            return new Map<string, Dog>();
        }
    }   
    export interface Youpi extends BaseInterface {
        yay: number;
        hehe: boolean;
    
        wow(): void;
    }
}