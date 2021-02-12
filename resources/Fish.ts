module MyNamespace {
    export class Fish extends Animal {
        public nbScale: number;

        constructor(name: string, nbScale: number) {
            super(name);
            this.nbScale = nbScale;
        }
    }
}