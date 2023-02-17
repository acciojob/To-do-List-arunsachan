//your code here
var toDoValue=document.getElementById('newTodoInput');
var Btn = document.getElementById('addTodoBtn');
var ol =  document.getElementById('todoList'); 

function addToDo() {
	if (toDoValue.value) 
	{
		var li= document.createElement('li');
		li.textContent = toDoValue.value;
		ol.appendChild(li);
		toDoValue.value="";
	}
}

Btn.addEventListener('click' , addToDo);




