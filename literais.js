let a = 5.0;
let b = 'test';
let c = true;
let d = ['a', 'b'];
let e = {color: 'red', shape: 'retangular'};

let lista = [a,b,c,d,e]

for (i in lista){
    console.log("================================")
    console.log("Valor: " + lista[i]);
    console.log("Tipo: " + typeof lista[i]);
}
