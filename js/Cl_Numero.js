export default class Cl_Numero{
    constructor(numero){
        this._numero = numero;
    }

    set numero(n){
        this._numero = +n;

    }
    get numero(){
        return this._numero;
    }

    parImpar(){
        return (this._numero % 2 == 0) ? "par" : "impar";
    }
}