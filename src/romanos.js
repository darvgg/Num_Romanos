const valores = [5,4,1];
const simbolos = ["V","IV","I"];

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