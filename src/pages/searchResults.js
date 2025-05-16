import createElement from "../components/createElement";
import createProjectCard from "../modules/createProjectCard";
import createTodoCard from "../modules/createTodoCard";

export  default  function renderSearchResults(resultsArray,searchType,searchTerm){
    const searchResultsContainer=createElement('div','search-results-container');
    if(resultsArray.length===0){
        let noResults=createElement('h3','no-results');

        if(searchTerm.trim()===''){
            noResults.textContent=`You don't have any  ${searchType.toLowerCase()}  to display` ;
        }
        else{
            noResults.textContent=`NO   ${searchType.toLowerCase()}  found for ${searchTerm}`;
        }
     
        searchResultsContainer.append(noResults);
    }  


    if(searchType.toLowerCase().trim()==='todos'){
         resultsArray.forEach((todo)=>{
            searchResultsContainer.append(createTodoCard(todo));
         })
    }


    if(searchType.toLowerCase().trim()==='projects'){
        resultsArray.forEach((project)=>{
            searchResultsContainer.append(createProjectCard(project));

        })
    }

    return searchResultsContainer;
}