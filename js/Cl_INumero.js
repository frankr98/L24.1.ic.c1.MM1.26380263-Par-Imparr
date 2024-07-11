export default class Cl_INumero{
    leerNumero(){
        return prompt("ingrese un numero");
    }

    reporteNumero(n,p){
        return`
        <h1>Reporte de Par o Impar</h1>
        <br> Numero: ${n}
        <br> Par o Impar: ${p}
        `
    }
}