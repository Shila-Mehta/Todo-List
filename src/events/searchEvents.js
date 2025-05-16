import searchBar from "../components/searchBar"
import { getCurrentSearchType, setCurrentSearchType } from "../data/currentSearchType";
import renderSearchResults from "../pages/searchResults";
let content=document.querySelector('.content');

import filterTodos from "../eventHandlers/searchHandlers/filterTodos";
import filterProjects from "../eventHandlers/searchHandlers/filterProjects";



export default  function SearchFunctionality(){
    document.body.addEventListener('click',(e)=>{
        if(e.target.classList.contains('search')){
        document.querySelector('.content-name').textContent='Search';

            content.innerHTML='';
            content.append(searchBar());
        }
    })
}


export  const  changeSearchType=()=>{

    document.body.addEventListener('change',(e)=>{
        if(e.target.classList.contains('search-option')){
           setCurrentSearchType(e.target.value);
           console.log(getCurrentSearchType());
        }
    })
}


export  const FiltersearchBar=()=>{

    document.body.addEventListener('input',(e)=>{
        if(e.target.classList.contains('search-input')){

            const oldResults=document.querySelector('.search-results-container');
            if(oldResults) oldResults.remove();

            // content.innerHTML='';
          
            if(getCurrentSearchType().toLowerCase().trim()==='todos'){
                const  todosArray=filterTodos(e.target.value);
                console.log(renderSearchResults(todosArray,getCurrentSearchType(),e.target.value));
               content.append( renderSearchResults(todosArray,getCurrentSearchType(),e.target.value));
             
            }
            
            if(getCurrentSearchType().toLowerCase().trim()==='projects'){
              const projectsArray=filterProjects(e.target.value);
              console.log(renderSearchResults(projectsArray,getCurrentSearchType(),e.target.value))
             content.append(renderSearchResults(projectsArray,getCurrentSearchType(),e.target.value));

            }
            
          
        }
    })
}