import createElement from "../components/createElement";
import createTodoCard from "../modules/createTodoCard";
import filterComing from "../modules/filterComing";

export default  function renderUpcoming(){
    const upcoming_container=document.createElement('div','upcoming_container');
      document.querySelector('.content-name').textContent='UpComing';
    const filteredTodos=filterComing();

    if(filteredTodos.length===0){
      const noTodo=createElement('h4','no-todo-message','No upcoming tasks');
      upcoming_container.append(noTodo);
    }
    else{
       filteredTodos.forEach((todo)=>{
       upcoming_container.append(createTodoCard(todo)) ;
    })

    }
   
    
      return upcoming_container;

}