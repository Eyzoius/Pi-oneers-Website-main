activepage.classList.remove('inactivePage');
activepage.classList.add('activePage');

/*Javascript for Toggle Menu*/
var delayInMicroseconds = 1000;
var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.display = "block";
    setTimeout(() => {navLinks.style.right = "0";}, 0);
    }
function hideMenu(){
    navLinks.style.right = "-70vw";
    setTimeout(() => {navLinks.style.display = "none";}, 1000);
    }

/*Show on scroll*/

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }

var scroll = window.requestAnimationFrame||function(callback) {
    window.setTimeout(callback,1000/60)
};
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop(){
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        }
    });
    scroll(loop);
}

loop();

