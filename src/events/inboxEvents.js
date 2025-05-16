import { projects } from '../data/ProjectList';
import renderfilterInbox from '../pages/inbox';
let content=document.querySelector('.content');
console.log(content);



export  default function inboxEvents(){
     document.body.addEventListener('click',(e)=>{
      if(e.target.classList.contains('inbox')){
        content.innerHTML='';
     
        console.log(renderfilterInbox());
        content.append(renderfilterInbox());
      }
     })



    
}