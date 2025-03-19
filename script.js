let counter = 0;

let toDoItem = function(toDoEvent) {
    counter++;
    return `
        <div class="toDoItem" id="item${counter}">
                <input type="checkbox" class="taskCheck" id="check${counter}">
                <span class="toDoText" id="text${counter}">${toDoEvent}</span>
                <button class="delete-btn" id="delete${counter}">❌</button>
            </div>
    `;
}


const addButton = document.querySelector(".addButton");
addButton.addEventListener('click',
    ()=> {
        // console.log("event listener");
        let input = document.querySelector(".toDoInput").value;
        
        
        if (input.trim() !== "") { 
            const result = toDoItem(input);
            // console.log(result);
            document.querySelector(".toDoList").insertAdjacentHTML("beforeend", result);
            document.querySelector(".toDoInput").value = "";
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

            if (targetInfo.getAttribute("class") === "taskCheck") {
                const parentId = targetInfo.parentNode.getAttribute("id");
                const parentElement = document.getElementById(parentId);
                const toDoTextElement = parentElement.querySelector(".toDoText");
            
                
                toDoTextElement.innerHTML = `<s>${toDoTextElement.innerText}</s>`;

                setTimeout(
                    () =>{
                        const toBeDeletedItem = targetInfo.parentNode.getAttribute("id");
                        const item = document.getElementById(toBeDeletedItem);
                        item.remove();
                    },800
                )
            }
            
            
        }
    );