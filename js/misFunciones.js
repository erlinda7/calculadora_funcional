var pantalla='';
var resultado=0;
var operador='';
var numero1=0;
var numero2=0;

function mostrar(valor){
    pantalla =pantalla + valor;
    document.getElementById('txtResultado').value= pantalla;

}

function obtenerOperador(operacion){
    numero1= document.getElementById('txtResultado').value;
    operador=operacion;
    document.getElementById('txtResultado').value='';
    pantalla='';
}


function calcular(){
    numero2=document.getElementById("txtResultado").value;
    switch(operador){
        case 'suma':
            suma();
        break;

        case 'resta':
            resta();
        break;

        case 'multiplicacion':
            multiplicacion();
        break;

        case 'division':
            division();
        break;
    }
}

function borrarPantalla(){
    document.getElementById('txtResultado').value='';
    numero1=0;
    numero2=0;
    resultado=0;
    pantalla='';
}

function suma(){
    resultado = parseInt(numero1) + parseInt(numero2);
    document.getElementById('txtResultado').value=resultado;
}

function resta(){
    resultado = parseInt(numero1) - parseInt(numero2);
    document.getElementById('txtResultado').value=resultado;
}
function multiplicacion(){
    resultado = parseInt(numero1) * parseInt(numero2);
    document.getElementById('txtResultado').value=resultado;
}
function division(){
    if(numero2!=0){
         resultado = parseInt(numero1) / parseInt(numero2);
         document.getElementById('txtResultado').value=resultado;
    }else{
        document.getElementById('txtResultado').value=0;
    }
}


