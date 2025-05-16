import deleteTodoHandler from "../eventHandlers/deleteTodoHandler"
import { getCurrentProjectId } from "../data/currentProjectId";

export default function deleteTodoEvent(){
    document.body.addEventListener('click',(e)=>{
        if(e.target.classList.contains('todo-del-btn')){
          const todoCard=e.target.closest('.todo-card-container');
          const  todoId= todoCard.dataset.id;
          const projectId=getCurrentProjectId();
          console.log(projectId);
            deleteTodoHandler(todoId,projectId);
            todoCard.remove();
        }
    })
} 