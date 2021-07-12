/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado; //lowerCamelCase quiere decir q se pone mayuscula cada q termina una palabra
	nombreIngresado=prompt("ingrese su nombre");
	document.getElementById("txtIdNombre").value = nombreIngresado;//en aqui paso de una variable a un id para q se guarde, todo se lee de derecha a izquierda
}

/*
ingresar datos mediante prompt
ingresar datos mediante ID
