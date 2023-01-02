function app(){
    //container
    const inputContainer = document.createElement("div");
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
    const submitButton = document.createElement("button");
    submitButton.textContent = "+";
    inputContainer.appendChild(submitButton);
    
    //TODOs field
    const todoContainer = document.createElement("ul");
    todoContainer.className = "todo";
    document.body.appendChild(todoContainer);

    //Done field
    const doneContainer = document.createElement("ul");
    doneContainer.className = "todo";
    document.body.appendChild(doneContainer);

    ///ToDo Items
    submitButton.addEventListener("click",() => {
        const listItem = document.createElement("li");
        listItem.textContent = `${title.value}\t${reminder.value}`;

        ///Done button for list it
        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.addEventListener("click",() => onDone(doneButton, todoContainer, doneContainer));

        listItem.appendChild(doneButton);
        
        todoContainer.appendChild(listItem);
    });

}

function onDone(doneButton, todoContainer, doneContainer){
    const listItem = document.createElement("li");
    listItem.textContent = doneButton.parentElement.childNodes[0].nodeValue;
    
    const returnButton = document.createElement("button");
    returnButton.textContent = "Return";
    returnButton.addEventListener("click", () => onReturn(returnButton, todoContainer, doneContainer));
    listItem.appendChild(returnButton);
    
    doneContainer.appendChild(listItem);
    todoContainer.removeChild( doneButton.parentElement);
}

function onReturn(returnButton, todoContainer, doneContainer){
    const listItem = document.createElement("li");
    listItem.textContent = returnButton.parentElement.childNodes[0].nodeValue;

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.addEventListener("click", () => onDone(doneButton, todoContainer, doneContainer));
    listItem.appendChild(doneButton);

    todoContainer.appendChild(listItem);
    doneContainer.removeChild(returnButton.parentElement);
}

app();