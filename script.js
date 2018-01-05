setInterval(cambiacolore, 100);
function cambiacolore(){

var r = Math.round(Math.random()*256);
var g = Math.round(Math.random()*256);
var b = Math.round(Math.random()*256);

colore_rgb = "rgb(" + r + "," + g + ", " + b + ")";
tabella.style.borderColor = colore_rgb;
}

function display(a){
    document.forms["dati"][a].style.display = "block";
}

function email(r){
    if(document.forms["dati"]["nome"].value == "" || document.forms["dati"]["nome"].value == "undefined"){
        alert("Inserisci almeno il nome");
    }
    else{
        var body = document.forms["dati"]["nome"].value + " " + r;
        location.href = "mailto:peppe1200yt@gmail.com?subject=compleanno&body=" + body;
    }
}
