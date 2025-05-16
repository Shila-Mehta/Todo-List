import createElement from "../components/createElement";
import createTodoCard from "../modules/createTodoCard";
import filterCompletedTodos from "../modules/filterCompletedTodos";

export  default function renderCompletedTodos(){
    const completedTodosContainer=createElement('div','completed-todos-container');
   document.querySelector('.content-name').textContent='completed';
    
    const completedTodos=filterCompletedTodos();

    if(completedTodos.length===0){
        const noTodo=createElement('h4','no-completed-todo','You  have no completed tasks');
        completedTodosContainer.append(noTodo);
    }
    else{
        completedTodos.forEach((todo)=>{
            completedTodosContainer.append(createTodoCard(todo));
        })

    }

    return completedTodosContainer;
}