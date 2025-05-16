import { saveProjectsToStorage } from "../../data/LocalStorage";
import { projects } from "../../data/ProjectList";
// import { inbox } from "../../data/InboxList";

export  default function filterInbox(){
  let  inbox=[];

    projects.forEach((project)=>{

    project.todos.forEach((todo)=>{

       if(todo.getStatus()==='pending'){
       inbox.push(todo);
       console.log({inbox});
       }
       
    })

    })


    saveProjectsToStorage(projects);
    console.log(inbox);

    return inbox;
}