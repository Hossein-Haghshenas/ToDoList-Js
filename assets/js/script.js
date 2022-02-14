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

      // todo counter

      completedNumber += 1;
      todocounter();
    } else {
      icon.classList.replace("fa-circle", "fa-circle-check");

      // todo counter

      completedNumber -= 1;
      todocounter();
    }
  });

  //hover for make active delete btn

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

    // todo counter

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

  // append check btn & todo text in container

  containerSpan.append(completeIcon, todoText);

  // append container & delete btn in newLi

  newLi.append(containerSpan, deleteIcon);

  // check input for valid value & make it empty

  if (todoInput.value !== "") {
    menu.appendChild(newLi);
    todoInput.value = "";

    // todo counter

    completedNumber++;
    todocounter();
  } else {
    alert("Please enter something !");
  }

  // call todo filter function

  todofilter();
});

// todo counter function

function todocounter() {
  todoNumber.textContent = `${completedNumber} Items left`;
}

// Create filter for todos

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
            !elem.classList.contains("done")
              ? elem.classList.remove("d-none")
              : elem.classList.add("d-none")
          );
          break;
        case "complete":
          todoItems.map((elem) =>
            elem.classList.contains("done")
              ? elem.classList.remove("d-none")
              : elem.classList.add("d-none")
          );
          break;
        case "clear":
          todoItems.map((elem) =>
            elem.classList.contains("done") ? elem.remove() : elem
          );
          break;
        default:
          "error";
      }
    });
  }
}
