const inputTask = document.getElementById("input-task");
const addButton = document.querySelector('.btn');
const list = document.querySelector('.list');
const input = document.querySelector('.input-p');

console.log(inputTask);
// console.log(addButton);
// console.log(list);


input.addEventListener('click', () => {
    let inputTask = document.createElement('input');
    inputTask.setAttribute('id', 'input-task');
    let addButton = document.createElement('button');
    addButton.textContent = 'Add';

    input.replaceWith(inputTask, addButton)

    addButton.addEventListener("click", () => {
        console.log("Button clicked");
    
        const task = inputTask.value.trim();
        console.log(task);
    
        const li = document.createElement('li');
        li.innerHTML = task;
        list.appendChild(li);
        li.style.display = "flex"; // Add flexbox for spacing
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.marginBottom = "10px";
    
    
        // Remove functionality
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.style.color = "black";
        removeBtn.style.paddingLeft = "10px"
        removeBtn.style.paddingRight = "10px"
        removeBtn.style.paddingTop = "6px"
        removeBtn.style.paddingBottom = "6px"
    
        removeBtn.addEventListener("click", () => {
            list.removeChild(li);
        })
    
        li.appendChild(removeBtn)
    
    
    
        inputTask.value = "";
    })
    
})




addButton.addEventListener("click", () => {
    console.log("Button clicked");

    const task = inputTask.value.trim();
    console.log(task);

    const li = document.createElement('li');
    li.innerHTML = task;
    list.appendChild(li);
    li.style.display = "flex"; // Add flexbox for spacing
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.marginBottom = "10px";


    // Remove functionality
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.color = "black";

    removeBtn.addEventListener("click", () => {
        list.removeChild(li);
    })

    li.appendChild(removeBtn)



    inputTask.value = "";
})
