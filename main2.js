nombre_alumno_array = [];
    
function submit()
{
    var ver_alumno_array = [];
    for (var j = 1; j <= 4; j++) 
    {
    var nombre_alumno = document.getElementById("nombre"+ j).value;
    nombre_alumno_array.push(nombre_alumno);
    }
    var longitud_nombre_alumnos_array = nombre_alumno_array.length;
   
    for (var k = 0; k < longitud_nombre_alumnos_array; k++) 
    {
        ver_alumno_array.push("<h4>NOMBRE - "+ nombre_alumno_array[k] + "</h4>");        
    }

    document.getElementById("ver_comas").innerHTML = ver_alumno_array;

    var remover_comas = ver_alumno_array.join(" ");
    document.getElementById("ver_sin_comas").innerHTML = remover_comas;


    document.getElementById("enviar").style.display = "none";
    document.getElementById("ordenar").style.display = "inline-block";

}
function sort()
{
    nombre_alumno_array.sort();
   

    var ver_alumno_array_ordenar = [];
    var longitud_nombre_alumnos_array = nombre_alumno_array.length;
    

    for (var k = 0; k < longitud_nombre_alumnos_array; k++) 
    {
        ver_alumno_array_ordenar.push("<h4>NOMBRE - " + nombre_alumno_array[k] + "</h4>");
        
    }

    var remover_comas = ver_alumno_array_ordenar.join(" ");
    console.log(remover_comas);

    document.getElementById("ver_sin_comas").innerHTML = remover_comas;
}

































function anterior(){
    window.location="index.html";
 }

