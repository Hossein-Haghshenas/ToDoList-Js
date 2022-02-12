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
  completeIcon.className = "fa-regular fa-circle check-icon";
  todoText.textContent = todoInput.value;
  deleteIcon.className = "fa fa-x d-none";

  // Add eventListener
  newLi.addEventListener("click", function () {
    this.firstChild.lastChild.classList.toggle("todo-done");

    const icon = this.firstChild.firstChild;
    if (icon.classList.contains("fa-circle-check")) {
      icon.classList.replace("fa-circle-check", "fa-circle");
    } else {
      icon.classList.replace("fa-circle", "fa-circle-check");
    }
  });
  newLi.addEventListener("mouseover", () => {
    deleteIcon.classList.toggle("d-none");
  });
  newLi.addEventListener("mouseout", () => {
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
