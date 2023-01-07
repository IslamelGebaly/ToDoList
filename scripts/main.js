function app(){
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

    //Done field
    const doneContainer = document.createElement("ul");
    doneContainer.className = "ToDos-list";
    document.body.appendChild(doneContainer);

    ///ToDo Items
    inputContainer.onsubmit = (event) => {
        event.preventDefault();
        const listItem = document.createElement("li");

        ///Done button for list it
        const doneButton = document.createElement("button");
        doneButton.textContent = "✓";
        doneButton.classList.add("btn");
        doneButton.classList.add("check-box");
        doneButton.addEventListener("click",() => onDone(doneButton, todoContainer, doneContainer));
        
        const info = document.createElement("div");
        info.className = "info";
        info.innerHTML = `${title.value}<br/>${reminder.value}`;

        listItem.appendChild(doneButton);
        listItem.appendChild(info);

        title.value = "";

        todoContainer.appendChild(listItem);
    };

}

function onDone(doneButton, todoContainer, doneContainer){
    const listItem = document.createElement("li");
    
    const returnButton = document.createElement("button");
    returnButton.textContent = "✓";
    returnButton.classList.add("btn");
    returnButton.classList.add("check-box");
    returnButton.addEventListener("click", () => onReturn(returnButton, todoContainer, doneContainer));

    listItem.appendChild(returnButton);
    listItem.appendChild(doneButton.parentElement.childNodes[1]);
    
    doneContainer.appendChild(listItem);
    todoContainer.removeChild(doneButton.parentElement);
}

function onReturn(returnButton, todoContainer, doneContainer){
    const listItem = document.createElement("li");

    const doneButton = document.createElement("button");
    doneButton.textContent = "✓";
    doneButton.classList.add("btn");
    doneButton.classList.add("check-box");
    doneButton.addEventListener("click", () => onDone(doneButton, todoContainer, doneContainer));

    listItem.appendChild(doneButton);
    listItem.appendChild(returnButton.parentElement.childNodes[1]);

    todoContainer.appendChild(listItem);
    doneContainer.removeChild(returnButton.parentElement);
}

app();