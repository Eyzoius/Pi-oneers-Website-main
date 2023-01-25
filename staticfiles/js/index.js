const mediaQuery = window.matchMedia('(max-width: 700px)');

/*Javascript for nameplate change*/
document.getElementById("nameplate").src="../static/images/Nameplate.png";


var project = document.getElementById("project"),
    publication = document.getElementById("publication"),
    activepage = document.getElementById("Home"),
    projectsArrow = document.getElementById("arrow-1"),
    projectsText = document.getElementById("featured-project-details"),
    projectsImg = document.getElementById("projects-img"),
    publicationsArrow = document.getElementById("arrow-2"),
    publicationsText = document.getElementById("featured-publication-details"),
    publicationsImg = document.getElementById("publications-img");


activepage.classList.remove('inactivePage');
activepage.classList.add('activePage');
projectsArrowDown = true;
publicationsArrowDown = true;


project.onclick = function (){
    window.location.href = "index.html";
}
publication.onclick = function (){
    window.location.href = "index.html";
}

projectsArrow.onclick = function(){
    if(projectsArrowDown){
        project.style.padding = "8vh 0 0 0";
        project.style.maxHeight = "61vh";
        projectsText.style.display = "none";
        projectsText.style.opacity = "0"
        projectsImg.style.opacity = "1";
        projectsArrow.classList.remove("fa-chevron-down");
        projectsArrow.classList.add("fa-chevron-up");
        projectsArrowDown = false;
    }else{
        project.style.padding = "13vh 5% 5% 5%";
        if(mediaQuery.matches){
            project.style.maxHeight = "18vh";
        }else{
            project.style.maxHeight = "25vh";
        }
        setTimeout(() => {projectsText.style.display = "block";}, 700);
        projectsText.style.opacity = "1"
        projectsImg.style.opacity = "0";
        projectsArrow.classList.remove("fa-chevron-up");
        projectsArrow.classList.add("fa-chevron-down");
        projectsArrowDown = true;
    }
}

publicationsArrow.onclick = function(){
    if(publicationsArrowDown){
        publication.style.padding = "8vh 0 0 0";
        publication.style.maxHeight = "61vh";
        publicationsText.style.display = "none";
        publicationsText.style.opacity = "0"
        publicationsImg.style.opacity = "1";
        publicationsArrow.classList.remove("fa-chevron-down");
        publicationsArrow.classList.add("fa-chevron-up");
        publicationsArrowDown = false;
    }else{
        publication.style.padding = "13vh 5% 5% 5%";
        if(mediaQuery.matches){
            publication.style.maxHeight = "18vh";
        }else{
            publication.style.maxHeight = "25vh";
        }
        setTimeout(() => {publicationsText.style.display = "block";}, 700);
        publicationsText.style.opacity = "1"
        publicationsImg.style.opacity = "0";
        publicationsArrow.classList.remove("fa-chevron-up");
        publicationsArrow.classList.add("fa-chevron-down");
        publicationsArrowDown = true;
    }
}


    