/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
 var producto1;
 var producto2;
 var producto2;
 var resultado;

 producto1=document.getElementById(txtIdPrecioUno).value;
 producto1=parseInt(producto1);
 producto2=document.getElementById(txtIdPrecioDos).value;
 producto2=parseInt(producto2);
 producto3=document.getElementById(txtIdPrecioTres).value;
 producto3=parseInt(producto3);

 reusltado=(producto1+producto2+producto3);

 alert("la suma es "+resultado);


}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres