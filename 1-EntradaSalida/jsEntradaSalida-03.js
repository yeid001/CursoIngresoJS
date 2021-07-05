/*vargas caceres yeison

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;
	nombreIngresado = document.getElementById("txtIdNombre").value;//muestro el nombre por variable  se lee de derecha  a izquierda
	alert("su nombre es " + nombreIngresado)
	}									


