import renderProjectList from '../eventHandlers/projectHandlers/renderProjectList.js';
import projectFormSubmission from '../eventHandlers/projectHandlers/projectFormSubmission.js';
import projectClick from '../eventHandlers/projectHandlers/ProjectClick.js';
import renderTodo from '../eventHandlers/projectHandlers/renderTodo.js';
import newTodoClick from '../eventHandlers/projectHandlers/newTodoClick.js';
import todoFormSubmission from '../eventHandlers/projectHandlers/todoFormSubmission.js';
import deleteProjectHandler from '../eventHandlers/deleteProjectHandler.js';
import { setCurrentProjectId } from '../data/currentProjectId.js';
import { projects } from '../data/ProjectList.js';
const content= document.querySelector('.content');




export default  function projectEvents(){
    document.body.addEventListener('click',(e)=>{

        //  show  all projects  cards 
        if(e.target.classList.contains('projects')){
           
            renderProjectList(content,projects);
        }
    
        // on add project btn
        if(e.target.classList.contains('add-project')){
            projectClick(content);
        }
    
    
        // on  submission button of project form
        if(e.target.classList.contains('add-btn')){
            projectFormSubmission(e,content,projects);
           
            
           }
    
          //  on click  on  project card opening it 
        if(e.target.classList.contains('card')){
            setCurrentProjectId(e.target.dataset.id);
            renderTodo(e,content,projects);
           
          
            
            
        }
         // on click on new-todo btn
        if(e.target.classList.contains('new-todo')){
            newTodoClick(content);
    
        }
    
        // on submission of todo-form
        if(e.target.classList.contains('done-btn')){
            todoFormSubmission(e,content,projects);
           
        }

     

        if(e.target.classList.contains('project-del-btn')){
            const projectId=e.target.dataset.id;
           deleteProjectHandler(projectId,projects);
        }
    
        })
    
    
}


    
