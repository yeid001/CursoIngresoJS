/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado; //lowerCamelCase
	nombreIngresado=prompt("ingrese su nombre");
	document.getElementById("txtIdNombre").value = nombreIngresado;//muestro el datopor id
}

/*
ingresar datos mediante prompt
ingresar datos mediante ID
