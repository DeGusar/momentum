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

let todoArray = [];
let todoIndex = 0
class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	let itemBox = document.createElement('div');
        itemBox.classList.add('reminder');

    	let input = document.createElement('input');
    	input.type = "checkbox";
     
        input.classList.add(`checkbox-todo`);
        input.setAttribute('id', `checkbox-todo${todoIndex}`);
       
       

        let label = document.createElement('label');
        label.textContent = name;
        label.classList.add(`remindertext${todoIndex}`);
        label.setAttribute('for', `checkbox-todo${todoIndex}`);
        
        input.addEventListener('click', () => this.check(input, name,label));

    	
    	inboxWrapper.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(label);
        todoArray.push(`checkbox-todo${todoIndex}`)
    }
    check(input, name, label) {
        if (input.checked) {
            label.classList.add('linethrough');
           
        } else {
            label.classList.remove('linethrough');
            
        }
    }
}
function check(){
	if(todoInput.value != ""){
     new item(todoInput.value);
     
       
        todoInput.value = "";
        
        todoIndex++
        firstWrapper.classList.add('hideTotally');
        inboxWrapper.classList.remove('hideTotally');
        console.log(todoArray);
     
    }
    else if(todoInput.value == "")
        alert("Enter some text")
        
}

todoInput.addEventListener('keydown', function(event) {
        if (event.code === 'Enter') {
            check();
           
          }
    })
    
function redColor(elem) {
    if (elem.checked) {
        elem.style.color = 'red'
    }
}
/* function checkedTodo() {
    checkBoxesInput.forEach(element => {
        if (element.checked) {
            console.log(element.id);
            }    
    });
    } */
