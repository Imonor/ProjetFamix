///<reference path='Animal.ts'/>
///<reference path='Dog.ts'/>

module MyNamespace {
    export class Fish extends Animal implements Youpi {
        public nbScale: number;

        constructor(name: string, nbScale: number) {
            super(name);
            this.nbScale = nbScale;
        }
        yay: number;
        hehe: boolean;
        wow(): void {
            throw new Error("Method not implemented.");
        }
        laMethode(): string {
            throw new Error("Method not implemented.");
        }
    }
}