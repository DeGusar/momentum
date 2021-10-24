let todoButton = document.querySelector('.todo-button');
let todoPopup = document.querySelector('.todo-popup');
let todoHeader = document.querySelector('.todo-header');
let todoWrapper = document.querySelector('.todo-wrapper');
let todoFooter = document.querySelector('.todo-footer');
let todoInput = document.querySelector('.todo-input');
let buttonNewTodo = document.querySelector('.buttonNewTodo');
let inboxWrapper = document.querySelector('.inbox-wrapper');
let firstWrapper = document.querySelector('.first-wrapper');
let todayWrapper = document.querySelector('.today-wrapper');
let doneWrapper = document.querySelector('.done-wrapper');


let isTodoOpen = false
function tooglePopupSettings() {
    if (!isTodoOpen) {
        todoPopup.classList.add('visible')
        todoButton.classList.add('activeButton');
        todoInput.focus()
       /*  setTimeout(function () {
            generalSettings.classList.remove('hideTotally')
        }, 1000); */
       
        isTodoOpen = true
    } else {
        todoPopup.classList.remove('visible')
        isTodoOpen = false
        todoButton.classList.remove('activeButton');
    }
}
todoButton.addEventListener('click', tooglePopupSettings);

window.addEventListener('click', e => { 
    const target = e.target 
    if (!target.closest('.todo-button') && !target.closest('.todo-popup')) { 
        todoPopup.classList.remove('visible')
        isTodoOpen = false
        todoButton.classList.remove('activeButton');
      
        /* setTimeout(function () {
            generalSettings.classList.remove('hideTotally');
            imagesWindow.classList.add('hideTotally');
        }, 1000); */
    }
})

buttonNewTodo.addEventListener('click', function () {
   
    todoFooter.classList.add('visible');
    todoInput.focus();
   
   
    

})

todoInput
inboxWrapper

class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	let itemBox = document.createElement('div');
        itemBox.classList.add('reminder');

    	let input = document.createElement('input');
    	input.type = "checkbox";
     
        input.classList.add('checkbox-todo');
        
        let label = document.createElement('label');
        label.textContent = name;
        label.classList.add('remindertext');

    	let remove = document.createElement('div');
    	remove.classList.add('remove');
    	remove.innerHTML = "<i class='fas fa-trash'></i>";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	inboxWrapper.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(label);
    }
}



function check(){
	if(todoInput.value != ""){
		new item(todoInput.value);
        todoInput.value = "";
        firstWrapper.classList.add('hideTotally');
            inboxWrapper.classList.remove('hideTotally');
           
    }
    else if(todoInput.value == "")
    alert("Enter some text")
}

todoInput.addEventListener('keydown', function(event) {
        if (event.code === 'Enter') {
            check();
          }
    })
    
