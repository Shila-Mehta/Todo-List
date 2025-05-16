import { saveProjectsToStorage } from "../data/LocalStorage";

export default  function deleteProjectHandler(projectId,projects){
    const projectIndex=projects.findIndex((p)=>p.id===projectId);
    if(projectIndex!==-1){
        projects.splice(projectIndex,1);
       
    }
  saveProjectsToStorage(projects);

     const projectCard=document.querySelector(`.card[data-id="${projectId}"]`);
        if(projectCard){
            projectCard.remove();
        }
}