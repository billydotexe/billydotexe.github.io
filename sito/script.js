function cambia()
{
    document.getElementById("hamburger").classList.toggle("open");
    document.getElementById("header").classList.toggle("open");
    document.getElementById("links").classList.toggle("open");
}

function pwd()
{
    var flag = document.getElementById("showpwd");
    var pwd = document.getElementById("password");
    
    if(flag.checked) pwd.setAttribute("type", "text");
    else pwd.setAttribute("type", "password");
}
