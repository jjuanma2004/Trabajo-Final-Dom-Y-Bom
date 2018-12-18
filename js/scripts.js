var alumnos = [];
var notas = [];

document.getElementById("Alumno").addEventListener("click", agregar_alumno);
document.getElementById("Promedio").addEventListener("click", nota_promedio);
document.getElementById("Mayor").addEventListener("click", nota_mayor);
document.getElementById("Menor").addEventListener("click", nota_menor);


// Funcion lista de Alumnos despliega en la pantalla		    
function agregar_alumno(){

	if (document.getElementById("Codigo").value == "" ){
		alert("Información del Código no puede estar en blanco...!");
		return;
	}

	if(document.getElementById("Nombre").value == "" ){
		alert("Información del Nombre no puede estar en blanco...!");
		return;
	}

	if(document.getElementById("Nota").value == "" ) {
		alert("Información de la Nota no puede estar en blanco...!");
		return;
	}

	var alumno = {
		"Codigo" : document.getElementById("Codigo").value,
		"Nombre" : document.getElementById("Nombre").value,
		"Nota"   : parseFloat(document.getElementById("Nota").value)};
	alumnos.push( alumno );
	document.getElementById("Codigo").value = "";
	document.getElementById("Nombre").value = "";
	document.getElementById("Nota").value = "";

  	var texto = "<table border='1' > <tr> <th>Código</th> <th>Nombre</th><th>Nota</th> </tr>";

  	for( num = 0; num < alumnos.length; num ++) {
			texto += "<tr> <td>" + alumnos[num].Codigo + "</td> <td>" + alumnos[num].Nombre + "</td> <td>" + alumnos[num].Nota.toFixed(2) + "</td> </tr>";  		
		}

	texto += "</table>";
	document.getElementById("listado").innerHTML = texto;
	array_calcular();
}

// Funcion recorre en un nuevo array solo las notas para calcular posteriormente
function array_calcular(){
	notas = [];
	for( num = 0; num < alumnos.length; num ++) {
		notas.push(alumnos[num].Nota);
	}
}

// Funcion calcula el promedio de la nota de los Alumnos  y despliega en la pantalla		    
function nota_promedio(){

	if (notas == []){
		alert("No existe información de los Estudiantes");
		return;
	}
	var sum = 0;
	var pro = 0;

	for(num = 0; num < alumnos.length; num ++){
		sum += (alumnos[num].Nota);
	}

	pro = sum / num;
	alert("El Promedio es: " + pro.toFixed(2));
}

// Funcion extrae al Alumnos con la nota mayor y despliega en la pantalla		    
function nota_mayor(){

	if (notas == []){
		alert("No existe información de los Estudiantes");
		return;
	}
	var mayor = notas.indexOf(Math.max.apply(null, notas ));
	alert("La nota mayor del estudiante: " + nombre_alumno(mayor));
}

// Funcion extrae al Alumnos con la nota menor y despliega en la pantalla		    
function nota_menor(){

	if (notas == []){
		alert("No existe información de los Estudiantes");
		return;
	}
	var menor = notas.indexOf(Math.min.apply(null, notas ));
	alert("La nota menor del estudiante: " + nombre_alumno(menor));
}

// Funcion para sacar el nombre del Alumno segun su pocision
function nombre_alumno(num){
	return alumnos[num].Nombre + "  la nota es: " + alumnos[num].Nota.toFixed(2);
}
