const getClassName = isCompleted => (isCompleted ? "completed" : "");

const makeElement = (tagName, options) => {
  const tag = document.createElement(tagName);

  Object.entries(options).forEach(([key, value]) => (tag[key] = value));

  return tag;
};

const createListItem = ({ text, completed }) => {
  const toDo = makeElement("li", { className: getClassName(completed) });

  const viewDiv = makeElement("div", { className: "view" });

  const toggle = makeElement("input", {
    type: "checkbox",
    className: "toggle"
  });

  const label = makeElement("label", {
    className: "label",
    innerHTML: text
  });

  const removeButton = makeElement("button", {
    className: "destroy",
    type: "button"
  });

  viewDiv.appendChild(toggle);
  viewDiv.appendChild(label);
  viewDiv.appendChild(removeButton);

  toDo.appendChild(viewDiv);

  removeButton.addEventListener("click", () => console.log("ss"));

  return toDo;
};

export default ({ todo: todoList }) => {
  const list = document.getElementById("todo-list");

  list.innerHTML = todoList
    .map(todo => createListItem(todo).outerHTML)
    .join("");
};
