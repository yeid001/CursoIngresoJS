/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var LargoTerreno;
	var AnchoTerreno;
	var CantidadAlambre;

LargoTerreno=document.getElementById("txtIdLargo").value;
LargoTerreno=parseInt(LargoTerreno);
	AnchoTerreno=document.getElementById("txtIdAncho").value;
AnchoTerreno=parseInt(AnchoTerreno);
CantidadAlambre=document.getElementById("txtIdRadio").value;
	CantidadAlambre=parseInt(CantidadAlambre);

	CantidadAlambre=(AnchoTerreno*LargoTerreno)*2;

	alert("la cantidad de alambre q se necesita es "+ CantidadAlambre + " metros");

}
function Circulo () 
{
	var radio;
	var CantidadAlambre;

radio=document.getElementById("txtIdRadio").value;
radio=parseInt(radio);

CantidadAlambre=(2*3.14 * radio) *3 ;

alert("la cantidad de alambre q se necesitan son "+CantidadAlambre+ " metros");
}
function Materiales () 
{
	var LargoTerreno;
	var AnchoTerreno;
	var CantidadCemento;
	var CantidadCAL;

LargoTerreno=document.getElementById("txtIdLargo").value;
LargoTerreno=parseInt(LargoTerreno);

AnchoTerreno=document.getElementById("txtIdAncho").value;
AnchoTerreno=parseInt(AnchoTerreno);

CantidadCemento=LargoTerreno*AnchoTerreno;

CantidadCAL=(LargoTerreno*AnchoTerreno)*1.5;

alert("la cantidad de bolsas de cemento son "+CantidadCemento+ " y la de cal son "+ CantidadCAL );

 }