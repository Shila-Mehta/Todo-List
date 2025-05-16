import { projects } from "../data/ProjectList";
import todoFormSubmission from "./projectHandlers/todoFormSubmission";
import todoForm from "../Forms/TodoForm";

export default  function editTodoHandler(todo,content){
    const form=todoForm();
    form.querySelector('.todo-title').value=todo.title;
    form.querySelector('.description').value=todo.description;
    form.querySelector('.duedate').value=todo.duedate;
    form.querySelector('.priority-dropdown').value=todo.priority;
    form.querySelector('.Label-DropDown').value=todo.label;

    //add  hidden input  with todo id
    const hiddenInput=document.createElement('input');
    hiddenInput.type='hidden';
    hiddenInput.className='hidden-todo-id';
    hiddenInput.value=todo.id;
    form.appendChild(hiddenInput);


    form.classList.add('edit-todo-form');

    content.innerHTML='';
    content.appendChild(form);


    form.addEventListener('submit',(e)=>{
        todoFormSubmission(e,content,projects);
})
}