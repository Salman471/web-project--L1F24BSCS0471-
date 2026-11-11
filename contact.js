var message = document.getElementById("message");
var counter = document.getElementById("counter");
var form = document.getElementById("contact-form");
var thanks = document.getElementById("thanks");

// live check: count the characters while the user types
message.addEventListener("input", function () {
  counter.textContent = message.value.length + " / 200";
});

// on submit: stop the page reload, show the thank-you message, clear the form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  thanks.classList.add("show");
  form.reset();
  counter.textContent = "0 / 200";
});