import renderCompletedTodos from "../pages/completed";
const content=document.querySelector('.content');


export default  function completedEvents(){
    document.body.addEventListener('click',(e)=>{
        if(e.target.classList.contains('completed')){
            content.innerHTML='';
          content.append(renderCompletedTodos());
        }

    })




   
}