/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var resultado;
	
	numero1= document.getElementById("txtIdNumeroUno").value;
	numero1 =parseInt(numero1);//parseInt transforma un stream(letras) a numero
	//lo q hicimos transformar el dato de un id a una variable y luego convertirlo en numero

	numero2= document.getElementById("txtIdNumeroDos").value;
	numero2 =parseInt(numero2);


	resultado= numero1 + numero2;

	alert("la suma es " + resultado);

}
	

