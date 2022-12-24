function app(){
    //container
    const inputContainer = document.createElement("div");
    inputContainer.className = "container";
    document.body.appendChild(inputContainer);

    //Text Field
    const title = document.createElement("input");
    title.className = "title"
    inputContainer.appendChild(title);

    ///Set Reminder
    const reminder = document.createElement("input");
    inputContainer.appendChild(reminder);


}

app();