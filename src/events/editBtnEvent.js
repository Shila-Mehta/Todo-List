
import  editTodoHandler from '../eventHandlers/editTodoHandler';
export  default  function editBtnEvent(){

    document.body.addEventListener('click',(e)=>{
        if(e.target.classList.contains('todo-card-edit')){
             editTodoHandler(todo, content, projects);
        }
    })
}