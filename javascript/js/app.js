 /* se puede agregar de esta forma javascript */
alert('Soy una ventana emergente!');
console.log('Hola soy un mensaje en la consola');
/* variables */
var nombre_variable;/* siempre ocupa espacio en memoria */
let otra_variable = "hola "; /* solo utiliza espacio al ser ocupada */
const PI = 3.1416; /* esta variable se mantiene */
let num2=18;
let hayClases=true;/* si cambiamos el valos a false, entrariamos en ELSE */
let TerminoLaClase=false;
/* tipos de variables: undefined. numero, string boolean,  objeto */
console.log(PI*num2);
console.log(num2 +36);
/* condicionales */
if(hayClases == true) {'nos conectamos a la llamada'
}else{'festejamos el dia del estudiante'
}

let elemento = document.getElementById('principal');
elemento.innerHTML="mi valor para innerHTML";
elemento.innerHTML= "<p>"+otra_variable+"</p>";
document.write("<h3 class= 'text_center bg-primary'>Hola Buen dia</h3>");
document.write("<h5>como estan?</h5>");
if(nombre_variable == undefined){
    elemento.innerHTML+="estamos en una variable sin valor definido"
    elemento.innerHTML+="<p>luis navas</p>"
    elemento.innerHTML+="<p>barbara</p>"
    elemento.innerHTML+="<p>damian</p>"
    elemento.innerHTML+="<p>debora</p>"
    elemento.innerHTML+="<p>elias</p>"
    elemento.innerHTML+="<p>matias</p>"
}
elemento.style.backgroundColor="blue"
elemento.style.color="white"

let menu = prompt("selecciona el pedido : \n 1. Milanesa con Frita \n 2. milanesa napolitana \n 3 fritas solas")

if(menu === '1'){/* valor y el tipo */
    elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">disfruta de tu milanesa con fritas!</div>"
}else if (menu ==='2'){/* valor y tipo */
    elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">disfruta de tu milanesa napolitana!</div>"
}else if (menu ==='3'){/* valor y tipo */
    elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">disfruta de tus fritas!</div>"
}else{
    alert('debe elegir una opcion correcta')
    let menu = prompt("selecciona el pedido : \n 1. Milanesa con Frita \n 2. milanesa napolitana \n 3 fritas solas")
}
