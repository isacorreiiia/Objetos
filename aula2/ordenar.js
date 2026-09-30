const clientes = require("./cliente.json");

function ordenar(lista, propriedade){
    const resultado = lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]){
            return 1;
        }
    });
}