const menu = document.querySelector(".todo-items");

const todoInput = document.getElementById("todo-input");

const todoSubmit = document.getElementById("todo-submit");

const todoNumber = document.getElementById("todo-Number");

const todoOptionsButtons = document.querySelectorAll(".todo-options button");

let completedNumber = 0;

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

  //create check/uncheck todo
  newLi.addEventListener("click", function () {
    this.firstChild.lastChild.classList.toggle("todo-done");
    this.classList.toggle("done");
    const icon = this.firstChild.firstChild;
    if (icon.classList.contains("fa-circle-check")) {
      icon.classList.replace("fa-circle-check", "fa-circle");
      completedNumber += 1;
      todocounter();
    } else {
      icon.classList.replace("fa-circle", "fa-circle-check");
      completedNumber -= 1;
      todocounter();
    }
  });
  //hover for active delete btn
  newLi.addEventListener("mouseover", () => {
    deleteIcon.classList.toggle("d-none");
  });
  newLi.addEventListener("mouseout", () => {
    deleteIcon.classList.toggle("d-none");
  });
  //delete todo with delete btn
  deleteIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    this.parentElement.remove();
    if (
      this.previousElementSibling.lastElementChild.classList.contains(
        "todo-done"
      )
    ) {
      todocounter();
    } else {
      completedNumber -= 1;
      todocounter();
    }
  });

  containerSpan.append(completeIcon, todoText);

  newLi.append(containerSpan, deleteIcon);

  if (todoInput.value !== "") {
    menu.appendChild(newLi);
    todoInput.value = "";
    completedNumber++;
    todocounter();
  } else {
    alert("Please enter something");
  }

  todofilter();
});

function todocounter() {
  todoNumber.textContent = `${completedNumber} Items left`;
}
function todofilter() {
  let todoItems = Array.from(menu.children);

  for (const btns of todoOptionsButtons) {
    btns.addEventListener("click", function (e) {
      switch (e.target.id) {
        case "all":
          todoItems.map((elem) => elem.classList.remove("d-none"));
          console.log(todoItems);
          break;
        case "active":
          todoItems.map((elem) =>
            elem.classList.contains("done")
              ? elem.classList.remove("d-none")
              : elem.classList.add("d-none")
          );
          break;
        case "complete":
          alert("complete");
          break;
        case "clear":
          alert("clear");
          break;
        default:
          "error";
      }
    });
  }
}
