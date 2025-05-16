import createButton from "../../components/createButton";
import createProjectCard from "../../modules/createProjectCard";
import Project from "../../Templates/Project_Template";
import { setCurrentProjectId } from "../../data/currentProjectId";
import { saveProjectsToStorage } from "../../data/LocalStorage";

export default function projectFormSubmission(e, content, projects) {
    e.preventDefault();
    const form = e.target.closest('form');

    console.log('start', form);

    const name = form.querySelector('.project-name').value;
    const color = form.querySelector('.select-element').value;
    const isEdit = form.classList.contains('edit-project-form');
    console.log(isEdit);

    let project;

    if (isEdit) {
        const projectId = form.querySelector('.hidden-project-id').value;
        let projectToUpdate = projects.find(p => p.id === projectId);

        if (projectToUpdate) {
            // Update the project details
            projectToUpdate.name = name;
            projectToUpdate.color = color;

             const updatedCard = createProjectCard(projectToUpdate); // Create the updated project card

            // Find the project card in the DOM and replace it with the updated one
            const projectCard = document.querySelector(`[data-id='${projectId}']`);
            if (projectCard) {
               
                projectCard.replaceWith(updatedCard); // Replace the old project card with the updated one
                console.log(projectCard);
            }

            // Set the current project ID
            setCurrentProjectId(projectToUpdate.id);

            // Optionally, you can clear the content and append only the updated card if needed
            content.innerHTML = ''; // Clear the content
            content.append(updatedCard); // Append the updated card

            saveProjectsToStorage(projects);

        }
    } else {
        // Add a new project
        project = new Project(name, color);
        projects.push(project);

        // Create a new project card
        const newProjectCard = createProjectCard(project);
        newProjectCard.dataset.id = project.id;
        newProjectCard.dataset.title = project.name;

        // Set the current project ID
        setCurrentProjectId(project.id);

        // Clear the content and append the new project card
        content.innerHTML = ''; // Clear the content
        content.appendChild(newProjectCard); // Append the new project card
        saveProjectsToStorage(projects);
    }
     
    // Optional: Add the "Add Project" button back after submission
    const newProjectBtn = createButton('add-project', 'Add-project');
    content.append(newProjectBtn);
}
