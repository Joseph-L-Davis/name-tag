const nameInput = document.getElementById("name-input");
const changeButton = document.getElementById("btn");
const nameDisplay = document.getElementById("name");
console.log(nameDisplay);

changeButton.addEventListener("click", () => {
  //when btn click do this
  nameDisplay.textContent = nameInput.value;
  nameInput.value = "";
});
