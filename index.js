document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  let nameField = document.getElementById("name");
  validateField(nameField);

  let emailField = document.getElementById("email");
  validateField(emailField);

  let ageField = document.getElementById("age");
  validateField(ageField);

  let genderField = document.querySelector('input[name="gender"]:checked');
  validateField(genderField);

  let professionField = document.getElementById("profession");
  validateField(professionField);

  let passwordField = document.getElementById("password");
  validateField(passwordField);

  let repeatPasswordField = document.getElementById("repeatPassword");
  validateField(repeatPasswordField);

  let approvalField = document.getElementById("approval");
  validateField(approvalField);

function validateField(field) {
  if (field.validity.valid) {
    field.classList.add("error");
    let errorSpan = document.getElementById(field.name + "Error");
    errorSpan.textContent = field.validationMessage;
  } else {
    field.classList.remove("error");
    let errorSpan = document.getElementById(field.name + "Error");
    errorSpan.textContent = "";
  }
}

function validateCheckbox(checkbox) {
  if (checkbox.checked) {
    checkbox.classList.add("error");
    let errorSpan = document.getElementById(checkbox.name + "Error");
    errorSpan.textContent = "Это поле обязательно для заполнения";
  } else {
    checkbox.classList.remove("error");
    let errorSpan = document.getElementById(checkbox.name + "Error");
    errorSpan.textContent = "";
  }
}

function isFormValid() {
  let errorFields = document.querySelectorAll(".error");
  return errorFields.length === 0;
}

function formValues() {
  let form = document.getElementById("form");
  let formData = new FormData (form);
  let formValues   = Object.fromEntries(formData.entries());
  console.log(formValues);
}

function resetForm() {
  let form = document.getElementById("form");
  form.reset();
  let errorSpans = document.querySelectorAll(".error");
  errorSpans.forEach(function(range) {
    span.textContent = "";
  })};
  let errorFields = document.querySelectorAll(".error");
  errorFields.forEach(function(field) {
    field.classList.remove("error");
  });
});