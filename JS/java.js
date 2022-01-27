$(function () {
 var menu_width = 290;
 var menu = $(".left_side_bar");
 var menu_open = $(".menu-open");
 var menu_close = $(".menu-close");
 var overlay = $(".overlay");

 menu_open.click(function (e) {
   e.preventDefault();
   menu.css({"right": "0px"});
   overlay.css({"opacity": "1", "width": "100%"});
 });
 
 menu_close.click(function (e) {
   e.preventDefault();
   menu.css({"right": "-" + menu_width + "px"});
   overlay.css({"opacity": "0", "width": "0"});
 });
});



function Avaliar(estrela) {
 var url = window.location;
 url = url.toString()
 url = url.split("index.html");
 url = url[0];

 var s1 = document.getElementById("s1").src;
 var s2 = document.getElementById("s2").src;
 var s3 = document.getElementById("s3").src;
 var s4 = document.getElementById("s4").src;
 var s5 = document.getElementById("s5").src;
 var avaliacao = 0;

if (estrela == 5){ 
 if (s5 == url + "./images/Starr.png") {
 document.getElementById("s1").src = "./images/Starr.png";
 document.getElementById("s2").src = "./images/Starr.png";
 document.getElementById("s3").src = "./images/Starr.png";
 document.getElementById("s4").src = "./images/Starr.png";
 document.getElementById("s5").src = "./images/Starr.png";
 avaliacao = 5;
 } else {
 document.getElementById("s1").src = "./images/Starr.png";
 document.getElementById("s2").src = "./images/Starr.png";
 document.getElementById("s3").src = "./images/Starr.png";
 document.getElementById("s4").src = "./images/Starr.png";
 document.getElementById("s5").src = "./images/Starr.png";
 avaliacao = 5;
}}
 
 //ESTRELA 4
if (estrela == 4){ 
 if (s4 == url + "./images/Starr.png") {
 document.getElementById("s1").src = "./images/Starr.png";
 document.getElementById("s2").src = "./images/Starr.png";
 document.getElementById("s3").src = "./images/Starr.png";
 document.getElementById("s4").src = "./images/Starr.png";
 document.getElementById("s5").src = "./images/Starr.png";
 avaliacao = 4;
 } else {
 document.getElementById("s1").src = "./images/Starr.png";
 document.getElementById("s2").src = "./images/Starr.png";
 document.getElementById("s3").src = "./images/Starr.png";
 document.getElementById("s4").src = "./images/Starr.png";
 document.getElementById("s5").src = "./images/Starr.png";
 avaliacao = 4;
}}

//ESTRELA 3
if (estrela == 3){ 
 if (s3 == url + "./images/Starr.png") {
 document.getElementById("s1").src = "./images/Starr.png";
 document.getElementById("s2").src = "./images/Starr.png";
 document.getElementById("s3").src = "./images/Starr.png";
 document.getElementById("s4").src = "./images/Starr.png";
 document.getElementById("s5").src = "./images/Starr.png";
 avaliacao = 3;
 } else {
 document.getElementById("s1").src = "./images/Starr.png";
 document.getElementById("s2").src = "./images/Starr.png";
 document.getElementById("s3").src = "./images/Starr.png";
 document.getElementById("s4").src = "./images/Starr.png";
 document.getElementById("s5").src = "./images/Starr.png";
 avaliacao = 3;
}}
 
//ESTRELA 2
if (estrela == 2){ 
 if (s2 == url + "./images/Starr.png") {
 document.getElementById("s1").src = "./images/Starr.png";
 document.getElementById("s2").src = "./images/Starr.png";
 document.getElementById("s3").src = "./images/Starr.png";
 document.getElementById("s4").src = "./images/Starr.png";
 document.getElementById("s5").src = "./images/Starr.png";
 avaliacao = 2;
 } else {
 document.getElementById("s1").src = "./images/Starr.png";
 document.getElementById("s2").src = "./images/Starr.png";
 document.getElementById("s3").src = "./images/Starr.png";
 document.getElementById("s4").src = "./images/Starr.png";
 document.getElementById("s5").src = "./images/Starr.png";
 avaliacao = 2;
}}
 
 //ESTRELA 1
if (estrela == 1){ 
 if (s1 == url + "./images/Starr.png") {
 document.getElementById("s1").src = "./images/Starr.png";
 document.getElementById("s2").src = "./images/Starr.png";
 document.getElementById("s3").src = "./images/Starr.png";
 document.getElementById("s4").src = "./images/Starr.png";
 document.getElementById("s5").src = "./images/Starr.png";
 avaliacao = 1;
 } else {
 document.getElementById("s1").src = "./images/Starr.png";
 document.getElementById("s2").src = "./images/Starr.png";
 document.getElementById("s3").src = "./images/Starr.png";
 document.getElementById("s4").src = "./images/Starr.png";
 document.getElementById("s5").src = "./images/Starr.png";
 avaliacao = 1;
}}
 
 document.getElementById('rating').innerHTML = avaliacao;

}

var p = document.getElementById("rating");

function alerta(){
	alert("Indisponível no momento");
}

//window.document.write("vdsfd");


function tot(){
	var result = confirm("Deseja enviar sua avaliação?");
	if(result==true){
		document.getElementById("Val").innerHTML=p;
	}
	else{
		alert("Cancelado");
	}
}


function reclamacoes(){
	var nome=prompt("Por favor insira seu nome");
	var reclam=prompt("Digite sua reclamação");
	var dados=confirm("Deseja enviar sua reclamação?");
	if(dados==true){
		alert(nome+", sua reclamação foi enviada!");
	}
	else{
		alert("Reclamação cancelada!");
	}
}

function sugestoes(){
	var nome=prompt("Por favor insira seu nome");
	var reclam=prompt("Digite sua sugestão");
	var dados=confirm("Deseja enviar sua sugestão?")
	if(dados == true){
		alert("Obrigado pela sua sugestão "+nome+"!");
	}
	else{
		alert("Sugestão cancelada cancelada!");
	}
}