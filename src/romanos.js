const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const simbolos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

function convertir (numero){
    let resultado = "";
    if (numero<=1000){
        for (let i = 0; i < valores.length; i++) {
            while (numero >= valores[i]) {
                resultado += simbolos[i];
                numero -= valores[i];
            }
        }
    }else{
        resultado = "El limite es 1000";
    }
    return resultado;
}

export {convertir};