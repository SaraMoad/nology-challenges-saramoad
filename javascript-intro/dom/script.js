// ### MVP:

// 1. You will need to use the "Lad in a pub" function created during class.
// 2. Add a script.js file to the provided code and add the following functionality:
//     - The function should be triggered on form submit.
//     - If the person is allowed to enter the pub, the colour of the bottle and the button background should change to green.
//     - If the person is not allowed to enter the pub, the bottle and the button background should be red.

function allowedInThePub(age) {
  return age >= 18;
}

const formElement = document.querySelector("form");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const ageInput = document.querySelector("#age");
  const parsedAge = parseInt(ageInput.value);

  const submitButton = document.querySelector("#submitButton");
  const isAllowedInPub = allowedInThePub(parsedAge);

  submitButton.classList.remove("button-red");
  submitButton.classList.remove("button-green");
  console.log(parsedAge);
  let buttonClass = isAllowedInPub
    ? submitButton.classList.add("button-green")
    : submitButton.classList.add("button-red");
  submitButton.classList.add(buttonClass);
});
