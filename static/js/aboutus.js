var activepage = document.getElementById("About-Us");

// Get the modal
var modal = document.getElementById("orgchart-modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("orgchart-contained");
var modalImg = document.getElementById("orgchart-zoomed");
var captionText = document.getElementById("orgchart-caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// When the user clicks on <span> (x), close the modal
function closeModal(){
    modal.style.display = "none";
}

$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});