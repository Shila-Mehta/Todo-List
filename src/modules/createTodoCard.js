import createButton from "../components/createButton";
import createElement from "../components/createElement";
import createInput from "../components/createInput";
import editTodoHandler from '../eventHandlers/editTodoHandler';

// You need to pass content and projects as arguments
export default function createTodoCard(todo, content=null, projects=null) {
    const todoContainer = createElement('div', 'todo-card-container');
     todoContainer.dataset.id=todo.id;
    const checkbox = createInput('checkbox', 'checkbox');
    checkbox.dataset.id = todo.id;

    const title = createElement('p', 'todo-card-title', todo.title);
    const description = createElement('p', 'todo-card-description', todo.description);
    const dueDate = createElement('p', 'todo-card-dueDate', todo.duedate);
    const priority = createElement('p', 'todo-card-prority', todo.priority);
    const label = createElement('p', 'todo-card-label', todo.label);
    const status = createElement('p', 'todo-card-status', todo.getStatus());

    const edit = createButton('todo-card-edit  todo-card-edit-btn', 'Edit');
    edit.dataset.id = todo.id;

    const del = createButton('todo-del-btn', 'Delete');
    del.dataset.id = todo.id;

    //  Add Edit button click listener
    edit.addEventListener('click', () => {
        console.log('inside edit click',content);
        editTodoHandler(todo, content, projects);
    });

    todoContainer.append(checkbox, title, description, dueDate, priority, status, label, edit, del);
    return todoContainer;
}
