const addButton = document.getElementById("addbutton");
const todoInput = document.getElementById("todoinput");
const outputVeld = document.getElementById("outputveld");

addButton.addEventListener('click', function(){
    const taskText = todoInput.value;
    if (taskText) { 
        
        //maak nieuwe taak 
        const newTask = document.createElement('div'); // er wordt een nieuw <div> element gemaakt
        newTask.textContent = taskText; // de content = tasktext input
        newTask.classList.add('task-item'); //geeft class mee voor css
        
        // maak verwijderknop
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-button');
        
        //wat de knop doet
        deleteButton.addEventListener('click', function(){
            outputVeld.removeChild(newTask)
        }) 



        outputVeld.appendChild(newTask); // nieuwe taak aan outputveld
        newTask.appendChild(deleteButton) // nieuwe knop aan taak
        
        todoInput.value = ''; //leegt shit
    }
    else { console.log("geen taak toegevoegd")}
})