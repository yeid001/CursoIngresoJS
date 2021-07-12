/*vargas caceres yeison

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;
	nombreIngresado = document.getElementById("txtIdNombre").value;

	/*con getElementById extraemos el dato de ahi para luego poder 
	usarlo para guardar en una variable y mostrar por pantalla*/
	
	alert("su nombre es " + nombreIngresado)
	}									


