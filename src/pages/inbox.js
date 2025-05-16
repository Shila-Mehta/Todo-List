import createElement from "../components/createElement";
import filterInbox from "../eventHandlers/inboxHandlers/FilterInbox";
import createTodoCard from "../modules/createTodoCard";


export  default  function renderfilterInbox(){
const inbox_container=createElement('div','inbox-container');
  document.querySelector('.content-name').textContent='inbox';

let inbox=filterInbox();

if(inbox.length===0){
 const emptyMessage=createElement('h4','empty-inbox-message','No tasks in your  inbox');
 inbox_container.append(emptyMessage);
} 
else{

    inbox.forEach((todo)=>{
    inbox_container.append( createTodoCard(todo));
})

}


return inbox_container;

}
