import { projects } from "../data/ProjectList";
import renderfilterInbox from "../pages/inbox";
import  renderCompletedTodos from '../pages/completed';

const content = document.querySelector('.content');

export default function checkBoxEvents() {
  document.body.addEventListener('change', (e) => {
    if (e.target.classList.contains('checkbox')) {
      const todoId = e.target.dataset.id;

      // Toggle the completed status
      projects.forEach((project) => {
        project.todos.forEach((todo) => {
          if (todo.id === todoId) {
            todo.toggleCompleted();

            // (Optional) Update UI text immediately
            const card = e.target.closest('.todo-card-container');
            const statusEl = card.querySelector('.todo-card-status');
            if (statusEl) statusEl.textContent = todo.getStatus();
          }
        });
      });

      // Determine which tab is active
      const isInboxTab = document.querySelector('.inbox-container');
      const isCompletedTab = document.querySelector('.completed-todos-container');

      // Re-render the relevant tab
      
      if (isInboxTab) {
       content.innerHTML = '';
        content.append(renderfilterInbox());
      } else if (isCompletedTab) {
        content.innerHTML = '';
        content.append(renderCompletedTodos());
      }
    }
  });
}
