import Project from "../Templates/Project_Template";
import Todo from "../Templates/Todo_Template";
import { loadProjectsFROMSTORAGE } from "./LocalStorage";

let projects=[];

const savedProjects=loadProjectsFROMSTORAGE();

if(savedProjects){
    projects=savedProjects.map(projData=>{
        const project=new Project(projData.name,projData.color);
        project.id=projData.id;


        project.todos=projData.todos.map((todoData)=>{
            const todo=new Todo(
                todoData.title,
                todoData.description,
                todoData.duedate,
                todoData.priority,
                todoData.project,
                todoData.label
            )

            todo.id=todoData.id;
            todo.completed=todoData.completed;
            todo.checklist=todoData.checklist;
            todo.notes=todoData.notes;
            return todo;
        })

        return project;
    })
}
else{
    projects=[];
}


export {projects};