import { saveProjectsToStorage } from "../../data/LocalStorage";
import { projects } from "../../data/ProjectList";
import { matchingTodos } from "../../data/matchingSearch";   

export default  function  filterTodos(searchTerm){
    matchingTodos.length=0;
    
    projects.forEach((project)=>{
     project.todos.forEach((todo)=>{
        if(todo.title.toLowerCase().includes(searchTerm.toLowerCase())){
            const alreadyExists=matchingTodos.some((existingTodo)=>existingTodo.id===todo.id);

            if(!alreadyExists)     matchingTodos.push(todo);
          
        }

     })
    })

    saveProjectsToStorage(projects);
    return matchingTodos;
}