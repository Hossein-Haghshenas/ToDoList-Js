const menu = document.querySelector(".todo-items");

const todoInput = document.getElementById("todo-input");

const todoSubmit = document.getElementById("todo-submit");

todoSubmit.addEventListener("click", (e) => {
  const newLi = document.createElement("li");

  const newI1 = document.createElement("i");
  const newI2 = document.createElement("i");
  const newSpan1 = document.createElement("span");
  const newSpan2 = document.createElement("span");

  newSpan1.className = "todo-text";
  newI1.className = "fa fa-circle-check check-icon";
  newSpan2.textContent = todoInput.value;
  newSpan1.append(newI1, newSpan2);
  newI2.className = "fa fa-x";

  newLi.append(newSpan1, newI2);

  menu.appendChild(newLi);
});
