import createElement from "../components/createElement";
import createTodoCard from "../modules/createTodoCard";
import filterToday from "../modules/filterToday";

export  default  function renderToday(){
    const today_container=createElement('div','today_contaniner');
      document.querySelector('.content-name').textContent='Today';

    const todayTodos=filterToday();

    if(todayTodos.length===0){
        const noTodo=createElement('h4','no-todo','You have no  tasks  for today');
        today_container.append(noTodo);
    }
    else{
       todayTodos.forEach((todo)=>{
        today_container.append(createTodoCard(todo));
       })
    }


    return today_container;
}
