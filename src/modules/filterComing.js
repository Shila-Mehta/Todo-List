import isComing from "../components/isComing";
import { saveProjectsToStorage } from "../data/LocalStorage";
import { projects } from "../data/ProjectList";

export  default function filterComing(){

    let  comingTodos=[];

    projects.forEach((project)=>{
        project.todos.forEach((todo)=>{
            if(isComing(todo.duedate)){
              comingTodos.push(todo);
            }
        })
    })

    saveProjectsToStorage(projects);
    return comingTodos;
}