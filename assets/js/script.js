const menu = document.querySelector(".todo-items");

const todoInput = document.getElementById("todo-input");

const todoSubmit = document.getElementById("todo-submit");

todoSubmit.addEventListener("click", (e) => {
  const newLi = document.createElement("li");

  // Create elements

  const containerSpan = document.createElement("span");
  const completeIcon = document.createElement("i");
  const todoText = document.createElement("span");
  const deleteIcon = document.createElement("i");

  // Add classes & values

  containerSpan.className = "todo-text";
  completeIcon.className = "fa fa-circle-check check-icon";
  todoText.textContent = todoInput.value;
  deleteIcon.className = "fa fa-x d-none";

  // Add eventListener

  newLi.addEventListener("mouseover", (e) => {
    deleteIcon.classList.toggle("d-none");
  });
  newLi.addEventListener("mouseout", (e) => {
    deleteIcon.classList.toggle("d-none");
  });
  deleteIcon.addEventListener("click", function (e) {
    this.parentElement.remove();
  });

  containerSpan.append(completeIcon, todoText);

  newLi.append(containerSpan, deleteIcon);

  if (todoInput.value !== "") {
    menu.appendChild(newLi);
    todoInput.value = "";
  } else {
    alert("Please enter something");
  }
});
