import createButton from "../../components/createButton";
import createTodoCard from "../../modules/createTodoCard";
import Todo from "../../Templates/Todo_Template";
import { getCurrentProjectId } from "../../data/currentProjectId";
import { saveProjectsToStorage } from "../../data/LocalStorage";

export default function todoFormSubmission(e, content, projects) {
    e.preventDefault();

    const form = e.target.closest('form');
    const isEdit = form.classList.contains('edit-todo-form');
    console.log('inside',isEdit);

    const title = form.querySelector('.todo-title').value;
    const description = form.querySelector('.description').value;
    const duedate = form.querySelector('.duedate').value;
    const priority = form.querySelector('.priority-dropdown').value;
    const label = form.querySelector('.Label-DropDown').value;

    const currentProject = projects.find(project => project.id === getCurrentProjectId());

    if (isEdit) {
        const todoId = form.querySelector('.hidden-todo-id').value;
        const todoToUpdate = currentProject.todos.find(todo => todo.id === todoId);

        if (todoToUpdate) {
            todoToUpdate.title = title;
            todoToUpdate.description = description;
            todoToUpdate.duedate = duedate;
            todoToUpdate.priority = priority;
            todoToUpdate.label = label;
        }

        saveProjectsToStorage(projects);
    } else {
        const todo = new Todo(title, description, duedate, priority, '', label);
        currentProject.addTodo(todo);
          saveProjectsToStorage(projects);
    }

    // Refresh UI
    content.innerHTML = '';

    currentProject.todos.forEach(todo => {
        const todoCard = createTodoCard(todo,content,projects);
        todoCard.dataset.id = todo.id;
        content.appendChild(todoCard);
    });

    const btn = createButton('new-todo', 'New Task');
    content.appendChild(btn);
}
