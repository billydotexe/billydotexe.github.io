var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByName("mySlides");
    var y = document.getElementsByName("paragrafo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "inline";
    y[slideIndex-1].style.display = "inline";
}
