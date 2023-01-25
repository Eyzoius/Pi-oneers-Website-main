var project = document.getElementById("project"),
    publication = document.getElementById("publication"),
    heighten1 = document.getElementById("heighten1");

project.onmouseover = function(){
    heighten1.style.maxHeight = "50vh";
}
project.onmouseleave = function(){
    heighten1.style.maxHeight = "0";
}
publication.onmouseover = function(){
    heighten2.style.maxHeight = "50vh";
}
publication.onmouseleave = function(){
    heighten2.style.maxHeight = "0";
}
project.onclick = function (){
    window.location.href = "index.html";
};
publication.onclick = function (){
    window.location.href = "index.html";
};

    