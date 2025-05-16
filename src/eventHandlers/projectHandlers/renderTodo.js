import createElement from "../../components/createElement";
import createButton from "../../components/createButton";
import createTodoCard from "../../modules/createTodoCard";
import { saveProjectsToStorage } from "../../data/LocalStorage";

export  default function renderTodo(e,content,projects){
    content.innerHTML = '';

    const projectTitle = createElement('h2', 'section-title', `${e.target.dataset.title}`);
    
      content.append(projectTitle);

       const project=projects.find((project)=> project.id===(e.target.dataset.id));
    

       project.todos.forEach((todo)=>{
       const  todoCard=createTodoCard(todo,content,projects);
       todoCard.dataset.id=todo.id;
       content.append(todoCard);
     
       })


        // creating task button  to display when project card got opened
        const btn=createButton('new-todo','new Task');
        content.append(btn);


        saveProjectsToStorage(projects);


}