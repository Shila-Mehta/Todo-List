import createButton from "../../components/createButton";
import createTodoCard from "../../modules/createTodoCard";
import createProjectCard from "../../modules/createProjectCard";
import createElement from "../../components/createElement";
import { saveProjectsToStorage } from "../../data/LocalStorage";

export  default function renderProjectList(content,projects){
        content.innerHTML='';
        document.querySelector('.content-name').textContent='Projects';
       
     

        if(projects.length>0){

            projects.forEach((project)=>{
                const projectCard=createProjectCard(project);

                projectCard.dataset.id = project.id;
               projectCard.dataset.title = project.name;
               content.append(projectCard);

               

               // projectCard.addEventListener('click',(e)=>{
               //    project.todos.forEach((todo)=>{
               //       const  todoCard=createTodoCard(todo);
               //         content.append(todoCard);
                   
               //    } )
               // })
            })

        }
        else{
         const noProject=createElement('h4','no-project','No Project Found');
         content.append(noProject);
        }
       
         const newProject=createButton('add-project','Add-project');
         content.append(newProject);


         saveProjectsToStorage(projects);


}