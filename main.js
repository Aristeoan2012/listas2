nombre_array=[];
 function submit(){

    var nombre_1=document.getElementById("nombre1").value;
    var nombre_2=document.getElementById("nombre2").value;
    var nombre_3=document.getElementById("nombre3").value;
    var nombre_4=document.getElementById("nombre4").value;

   
    nombre_array.push(nombre_1);
    nombre_array.push(nombre_2);
    nombre_array.push(nombre_3); 
    nombre_array.push(nombre_4);
   

        document.getElementById("ver").innerHTML = nombre_array;
        document.getElementById("enviar").style.display = "none";
        document.getElementById("ordenar").style.display = "inline-block";

 }
 function sort(){
    nombre_array.sort();
    document.getElementById("ver").innerHTML = nombre_array;
 }
 function siguiente(){
    window.location="index2.html";
 }