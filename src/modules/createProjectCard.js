import createButton from "../components/createButton";
import createElement from "../components/createElement";
import editProjectHandler from "../eventHandlers/editProjectHandler";
const content=document.querySelector('.content');

export  default function createProjectCard(project){
    const card=createElement('div','card');
    card.dataset.id=project.id;
    const name=createElement('span','name  ',project.name);
    const color=createElement('span','color ',project.color);
    const edit=createButton('project-edit-btn','edit');
    edit.dataset.id=project.id;
    const del=createButton('project-del-btn','delete');
    del.dataset.id=project.id;

    
    card.append(name,color,edit,del);
    console.log(card);

        edit.addEventListener('click',(e)=>{
            editProjectHandler(project,content);
        })
    
         
        

    return card;

}