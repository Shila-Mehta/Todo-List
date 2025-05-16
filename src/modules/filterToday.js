import isToday from "../components/isToday";
import { saveProjectsToStorage } from "../data/LocalStorage";
import { projects } from "../data/ProjectList";

export default  function filterToday(){

    const todayTodos=[];

    projects.forEach((project)=>{
        project.todos.forEach((todo)=>{


            console.log('Today:', new Date()); // Log current date
            console.log('Due Date:', todo.duedate);
           
            if(isToday(todo.duedate)){
               todayTodos.push(todo);
            }



        })
    })

    saveProjectsToStorage(projects);

    return todayTodos;
}