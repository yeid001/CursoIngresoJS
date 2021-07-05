/* vargas caceres yeison

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	nombre=document.getElementById('txtIdNombre').value; //se guarda el nombre del id en la variable "nombre"
	edad=document.getElementById('txtIdEdad').value;// lo mismo q arriba pero con edad

	alert("usted se llama "+nombre+ " y tiene "+ edad); //se muestra por pantalla concatenando con +
}

//txtIdNombre
//txtIdEdad

/*
entradas:
   declarar una variable
   infresar datos mediante prompt  o
   ingresar datos mediante ID

salidas:
   alert
   ID
   console.log
   document.write