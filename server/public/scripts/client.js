var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $routeProvider
    .when('/about', {
      templateUrl: '/views/templates/about.html',
      controller: 'InfoController',
    })
    .when('/projects', {
      templateUrl: '/views/templates/projects.html',
      controller: 'InfoController',
      
    })
    .otherwise({
      redirectTo: '/about'
    });
});
/* Open when someone clicks on the span element */
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function openNav2() {
  document.getElementById("myNav2").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
}
function openNav3() {
  document.getElementById("myNav3").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav3() {
  document.getElementById("myNav3").style.width = "0%";
}
function openNav4() {
  document.getElementById("myNav4").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav4() {
  document.getElementById("myNav4").style.width = "0%";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// function openCity(evt, cityName) {
//   // Declare all variables
//   var i, tabcontent, tablinks;

//   // Get all elements with class="tabcontent" and hide them
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

