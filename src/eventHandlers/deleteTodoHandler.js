import { saveProjectsToStorage } from "../data/LocalStorage";
import { projects } from "../data/ProjectList";

export  default  function deleteTodoHandler(todoId,projectId){
    const  currentProject=projects.find((p)=>p.id===projectId);

     const  todoIndex=currentProject.todos.findIndex((todo)=>todo.id===todoId);

     if(todoIndex!==-1){
        currentProject.todos.splice(todoIndex,1);
     }

     saveProjectsToStorage(projects);
}