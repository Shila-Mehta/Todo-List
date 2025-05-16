import { saveProjectsToStorage } from "../data/LocalStorage";
import { projects } from "../data/ProjectList";

export  default function filterCompletedTodos(){
    const filteredTodos=[];
    projects.forEach((project)=>{
        project.todos.forEach((todo)=>{
            if(todo.getStatus()==='completed'){
                filteredTodos.push(todo);
            }
        })
    })

    saveProjectsToStorage(projects);

    return filteredTodos;
}