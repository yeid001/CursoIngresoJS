/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var resultado;
	/*lo primero q hacemos es transformar a numero loq esta en id y lo 
	guardamos una variable par aluego realizar la operacion del 10%*/

	sueldo= document.getElementById("txtIdSueldo").value;
	sueldo=parseInt(sueldo);

	/* una ves q ya hicimos la operacion entonces guardamos loq esta 
	en la variable en la id para q se muestre por pantalla en su 
	correspondiente lugar*/

	resultado= (sueldo * 1.10);// multiplicando 1.10 se saca el 10% de cualquier numero
	document.getElementById("txtIdResultado").value =resultado ;


}
