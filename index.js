"use strict";
const textInput = document.getElementById("textInput");
const toDoList = document.querySelector(".to-do-list");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);
textInput.addEventListener("keydown", (e) =>
  e.key === "Enter" ? addTask() : null
);

function addTask() {
  const userInput = textInput.value.trim();
  if (userInput != "") {
    const listItem = document.createElement("li");
    listItem.textContent = userInput;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", removeTask);

    listItem.appendChild(removeButton);
    toDoList.appendChild(listItem);

    listItem.classList.toggle("list-design");
    removeButton.classList.toggle("remove");

    textInput.value = "";
  }
}

function removeTask(event) {
  const listItem = event.target.parentElement;
  toDoList.removeChild(listItem);
}
