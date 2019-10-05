setInterval(billy, 1000);

function billy(){
    sleep(300).then(() =>{
        document.getElementById('a').style.display = "none";
        document.getElementById('b').style.display = "block";
    });
    sleep(600).then(() =>{
        document.getElementById('b').style.display = "none";
        document.getElementById('c').style.display = "block";
    });
    sleep(900).then(() =>{
        document.getElementById('c').style.display = "none";
        document.getElementById('a').style.display = "block";
    });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


setInterval(colore, 100);

function colore(){

    var red = Math.round(Math.random()*256);
    var green = Math.round(Math.random()*256);
    var blu = Math.round(Math.random()*256);

    colore_rgb = "rgb(" + red + "," + green + ", " + blu + ")";
    a.style.color = colore_rgb;
    b.style.color = colore_rgb;
    c.style.color = colore_rgb;
}
