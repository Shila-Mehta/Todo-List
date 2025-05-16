import createElement from "../components/createElement";
import filterByLabel from "../modules/filterByLabel";
import createTodoCard from "../modules/createTodoCard";

export default  function  renderfilterByLabel(label){

const filterByLabel_container=createElement('div','filterByLabel_container');
  document.querySelector('.content-name').textContent='Label';
const filterByLabelTodos=filterByLabel(label);

if(filterByLabelTodos.length===0){
    const noTodo=createElement('h4','no-label-todo','You have no tasks with this  label');
    filterByLabel_container.append(noTodo);
}
else{

    filterByLabelTodos.forEach((todo)=>{
        filterByLabel_container.append(createTodoCard(todo));
    })
}

return  filterByLabel_container;
}