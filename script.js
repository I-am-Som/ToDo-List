let counter = 0;

let toDoItem = function(toDoEvent) {
    counter++;
    return `
        <div class="toDoItem" id="item${counter}">
                <span id="toDoText${counter}">${toDoEvent}</span>
                <button class="edit-btn" id="edit${counter}">✏️</button>
                <button class="delete-btn" id="delete${counter}">🗑️</button>
            </div>
    `;
}



const addButton = document.querySelector(".addButton");
addButton.addEventListener('click',
    ()=> {
        console.log("event listener");
        let input = document.querySelector(".toDoInput").value;
        
        
        if (input.trim() !== "") { // Prevent adding empty tasks
            const result = toDoItem(input); // Get HTML string
            console.log(result);
            document.querySelector(".toDoList").insertAdjacentHTML("beforeend", result); // Convert string to HTML
            document.querySelector(".toDoInput").value = ""; // Clear input
        }
    }
);

document.querySelector(".toDoList").addEventListener("click", (event) => {
    const e = event.target;

    if (event.target.classList.contains("delete-btn")) {
        console.log("Delete button clicked!");
    }
    if (event.target.classList.contains("edit-btn")) {
        console.log("edit button clicked!");
    }
});
