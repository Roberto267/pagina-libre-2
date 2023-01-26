window.addEventListener("load", function(){
    document.getElementById("viewalerta").addEventListener("click",function()
    {
alert("Con este numero se podra contactar con nosotros 3321583454");
    })
 })
 window.addEventListener("load", function(){
    document.getElementById("viewalerta1").addEventListener("click",function()
    {
alert("Usted ya se encuentra en el inicio");
    })
 })
 function getlink(){
   var l= document.links;
   document.getElementById("resultado").innerHTML= l.link.href;
 }

const btn=document.querySelector('button');
const body=document.querySelector('body');

const colores =['blue','green','red','orange','fuchsia'];

btn.addEventListener('click',fondo);

function fondo(){
    var indice=parseInt(Math.random()*colores.length);
    body.style.backgroundColor=colores[indice];
}
