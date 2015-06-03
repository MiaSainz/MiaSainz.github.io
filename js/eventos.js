var inicioApp = function()
{

	var Proyectos = function()
	{
	$("#proyectos").show("slow");
	$("#datos").hide("slow");
	$("#btnDatos").show("slow");
	$("#btnProyectos").hide("slow");
	}
	var Datos = function()
	{
	$("#datos").show("slow");
	$("#proyectos").hide("slow");
	$("#btnDatos").hide("slow");
	$("#btnProyectos").show("slow");
}

	$("#btnProyectos").on("click",Proyectos);
	$("#btnDatos").on("click",Datos);

	var mia = $("#menuCelular").val();

	if(mia=="btnProyectos")
		Proyectos();
	else if (mia=="btnDatos")
		Datos();


}
$(document).on("ready",inicioApp);
