import { saveProjectsToStorage } from "../data/LocalStorage";
import { projects } from "../data/ProjectList";

export default  function filterByLabel(label){

    const filteredTodos=[];

    projects.forEach((project)=>{
        project.todos.forEach((todo)=>{
            if(todo.label===label || label==='All Labels'){
               filteredTodos.push(todo);
            }

        })
    })

    saveProjectsToStorage(projects);

    return filteredTodos;
}