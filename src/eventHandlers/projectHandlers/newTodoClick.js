import todoForm from "../../Forms/TodoForm";
export default function newTodoClick(content){
     //rendering  todo-form
        content.innerHTML='';
        content.append(todoForm());
}
