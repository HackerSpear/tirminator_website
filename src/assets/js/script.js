
$(document).ready(function () {
  $('#nav-toggler').on('click', function () {
    $(this).toggleClass('fa-times');
    $('.main-nav .ext-stl').toggleClass('show');
  });

  $(window).on('scroll load', function () {

    if ($(window).scrollTop() > 0) {
      $('.main-nav').addClass('bgchange');
    } else {
      $('.main-nav').removeClass('bgchange');
    }


  });

});

function validateForm() {
  // Get the input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;

  // Clear previous error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("subjectError").textContent = "";

  // Perform validation
  var isValid = true;

  if (name.trim() === "") {
    document.getElementById("nameError").textContent = "Please enter your name.";
    isValid = false;
  }

  if (email.trim() === "") {
    document.getElementById("emailError").textContent = "Please enter your email.";
    isValid = false;
  }

  // Additional email validation using regular expression
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (subject.trim() === "") {
    document.getElementById("subjectError").textContent = "Please enter a subject.";
    isValid = false;
  }

  // Form is valid, allow submission
  return isValid;
}




