const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const simbolos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

function convertir (numero){
    let resultado = "";
    for (let i = 0; i < valores.length; i++) {
        while (numero >= valores[i]) {
            resultado += simbolos[i];
            numero -= valores[i];
        }
    }
    return resultado;
}

export {convertir};