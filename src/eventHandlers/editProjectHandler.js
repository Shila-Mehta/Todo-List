import projectForm from "../Forms/ProjectForm";
import projectFormSubmission from "./projectHandlers/projectFormSubmission";
import { projects } from "../data/ProjectList";

export default function editProjectHandler(project, content) {
   
     
     const form = projectForm();
    form.querySelector('.project-name').value = project.name;
    form.querySelector('.select-element').value = project.color;

    form.classList.add('edit-project-form');

    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.classList = 'hidden-project-id';
    hiddenInput.value = project.id;
    form.append(hiddenInput);

    console.log('inside edit  project handler',form);
    console.log('inside edit Handler', content);

    content.innerHTML = '';
    content.append(form); 

    form.addEventListener('submit', (e) => {
        projectFormSubmission(e, content, projects);
    });
}
