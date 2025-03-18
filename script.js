let counter = 0;

let toDoItem = function(toDoEvent) {
    counter++;
    return `
        <div class="toDoItem" id="item${counter}">
                <span class="toDoText" id="text${counter}">${toDoEvent}</span>
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
    
    document.querySelector(".toDoList").addEventListener("click",
        (e) => {
            let targetInfo = e.target;
            if (targetInfo.getAttribute("class") === "delete-btn") {
                const toBeDeletedItem = targetInfo.parentNode.getAttribute("id");
                const item = document.getElementById(toBeDeletedItem);
                item.remove();
            }
        }
    );