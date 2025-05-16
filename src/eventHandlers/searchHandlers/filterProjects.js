import { saveProjectsToStorage } from "../../data/LocalStorage";
import { projects } from "../../data/ProjectList";
import { matchingProjects } from "../../data/matchingSearch";

export  default  function  filterProjects(searchTerm){

    matchingProjects.length=0;
    
   projects.forEach((project)=>{
    if(project.name.toLowerCase().includes(searchTerm.toLowerCase())){

        const alreadyExists=matchingProjects.some((existingProject)=>existingProject.id===project.id);

        if(!alreadyExists)     matchingProjects.push(project);
      
    }
   })

   saveProjectsToStorage(projects);

   return matchingProjects;
}

