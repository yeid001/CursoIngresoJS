/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var FahrenCenti;
	var CentiFahren;
	

	FahrenCenti= document.getElementById("txtIdTemperatura").value;
	FahrenCenti=parseInt(FahrenCenti);

	CentiFahren=(FahrenCenti -32)/1.8;

	alert( FahrenCenti+" fahrenheit son " + CentiFahren+ " centigrados");

}

function CentigradosFahrenheit () 
{
	var FahrenCenti;
	var CentiFahren;
	

	CentiFahren= document.getElementById("txtIdTemperatura").value;
	CentiFahren=parseInt(CentiFahren);

	FahrenCenti=(CentiFahren * 1.8)+32;

	alert( CentiFahren+" centigrados son " + FahrenCenti+ " fahrenheit ");

}
