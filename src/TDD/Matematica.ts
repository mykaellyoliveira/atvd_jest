export class Matemagica{
    a: number;
    b: number;

    constructor(a: number, b: number){
        this.a = a;
        this.b = b;
    }

    getSum(a,b): number{
        return this.a + this.b
    }

    getSub(a,b): number{
        return this.a - this.b
    }

    getMult(a,b): number{
        return this.a * this.b
    }

    getDiv(a,b): number{
        return this.a / this.b
    }
}