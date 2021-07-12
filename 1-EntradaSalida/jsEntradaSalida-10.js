Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	/*lo primero q hacemos es transformar a numero loq esta en id y lo 
	guardamos una variable par aluego realizar la operacion del 25%*/

	importe= document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);

	/* una ves q ya hicimos la operacion entonces guardamos loq esta 
	en la variable en la id para q se muestre por pantalla en su 
	correspondiente lugar*/

	resultado= (importe * 0.75);// multiplicando 0.75 se saca el 25% de cualquier numero
	document.getElementById("txtIdResultado").value =resultado ;
}

