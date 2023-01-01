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
    reminder.setAttribute("min", `${new Date().getHours()}:${new Date().getMinutes()}`)
    inputContainer.appendChild(reminder);

    //Submit Button
    const submitButton = document.createElement("button");
    submitButton.textContent = "+";
    inputContainer.appendChild(submitButton);
    
    //TODOs field
    const todoContainer = document.createElement("ul");
    todoContainer.className = "todo";
    document.body.appendChild(todoContainer);

    ///ToDo Items
    submitButton.addEventListener("click",() => {
        listItem = document.createElement("li");
        listItem.textContent = `${title.value}\t${reminder.value}`;

        ///Done button for list it
        const doneButton = document.createElement("button");
        doneButton.textContent = "Done";
        doneButton.addEventListener("click", () => {
            todoContainer.removeChild( doneButton.parentElement);
        });

        listItem.appendChild(doneButton);
        
        todoContainer.appendChild(listItem);
    });

}

app();