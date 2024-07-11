/** análisis 
 *  crear un programa que que lea un numero como entrada y determine si es par o impar
 * muestre un reporte indicando si es par o impar
 */

import Cl_INumero from "./Cl_INumero.js";
import Cl_Numero from "./Cl_Numero.js";

let Inum = new Cl_INumero(),
    n = Inum.leerNumero(),

    num = new Cl_Numero(n),
    salida = document.getElementById("salida")
    salida.innerHTML = Inum.reporteNumero(num.numero, num.parImpar());