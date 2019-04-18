function navFunction() {
  var nav = document.getElementById("navbarid");
  if (nav.className === "navbar"){
    nav.className += " respond";
  }
  else {
    nav.className = 'navbar';
  }
}

var accord = document.getElementsByClassName("accordion");
var x;

for (x = 0; x < accord.length; x++) {
  accord[x].addEventListener("click", function() {
    this.classList.toggle("active");
    var text = this.nextElementSibling;
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
  });
}

window.onscroll = function() {myFunction()};

var nav = document.getElementById("navbarid");
var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}
