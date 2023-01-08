function app(){
    //loading content
    const content = JSON.parse(localStorage.getItem("content")); 
    //container
    const inputContainer = document.createElement("form");
    inputContainer.className = "container";
    document.body.appendChild(inputContainer);

    //Text Field
    const title = document.createElement("input");
    title.className = "title";
    inputContainer.appendChild(title);

    ///Set Reminder
    const reminder = document.createElement("input");
    reminder.setAttribute("type", "time");
    reminder.setAttribute("value", `${new Date().getHours()}:${new Date().getMinutes()}`);
    inputContainer.appendChild(reminder);

    //Submit Button
    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.value = "+";
    submitButton.classList.add("btn");
    submitButton.classList.add("submit-btn");
    inputContainer.appendChild(submitButton);
    
    //TODOs field
    const todoContainer = document.createElement("ul");
    todoContainer.className = "ToDos-list";
    document.body.appendChild(todoContainer);
    content.forEach((child) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = child;
        listItem.childNodes[0].addEventListener("click", () => onDone(listItem.childNodes[0], todoContainer, doneContainer));
        todoContainer.appendChild(listItem);
    })

    //Done field
    const doneContainer = document.createElement("ul");
    doneContainer.className = "ToDos-list";
    document.body.appendChild(doneContainer);

    ///ToDo Items
    inputContainer.onsubmit = (event) => {
        event.preventDefault();
        
        ///Done button for list it
        const doneButton = createBtn();
        doneButton.addEventListener("click",() => onDone(doneButton, todoContainer, doneContainer));

        const listItem = createListItem(`${title.value}<br/>${reminder.value}` ,doneButton);
        title.value = "";

        todoContainer.appendChild(listItem);
    };

    //Store before quitting
    window.onbeforeunload = () => {
        localStorage.clear();
        const storage = [];
        todoContainer.childNodes.forEach((chileNode) => {
            storage.push(chileNode.innerHTML);
        });
        const content = JSON.stringify(storage);
        localStorage.setItem("content", content);
    };

}

function createListItem(content, btn){
    const listItem = document.createElement("li");

    const info = document.createElement("div");
    info.className = "info";
    info.innerHTML = content;

    listItem.appendChild(btn);
    listItem.appendChild(info);
    return listItem;
}

function createBtn(){
    const btn = document.createElement("button");
    btn.textContent = "✓";
    btn.classList.add("btn");
    btn.classList.add("check-box");
    return btn;
}

function onDone(doneButton, todoContainer, doneContainer){
    const returnButton = createBtn();
    returnButton.addEventListener("click", () => onReturn(returnButton, todoContainer, doneContainer));

    const listItem = createListItem(doneButton.parentElement.childNodes[1].innerHTML, returnButton);
    
    doneContainer.appendChild(listItem);
    todoContainer.removeChild(doneButton.parentElement);
}

function onReturn(returnButton, todoContainer, doneContainer){
    const doneButton = createBtn();
    doneButton.addEventListener("click", () => onDone(doneButton, todoContainer, doneContainer));

    const listItem = createListItem(returnButton.parentElement.childNodes[1].innerHTML, doneButton);
    
    todoContainer.appendChild(listItem);
    doneContainer.removeChild(returnButton.parentElement);
}
app();