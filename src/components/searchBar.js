import createElement from "./createElement";
import createInput from "./createInput";

export  default function searchBar(){
    const searchContainer=createElement('div','search-container');
    const title=createElement('h3','search-heading','Search-Bar');
    //options drop down
    const searchOption=createElement('select','search-option','','search-type');
    const opt=createElement('option','search-option','Search-Type','','','Search-Type');
    const opt1=createElement('option','search-option-1','Todos','','','todos');
    const opt2=createElement('option','search-option-2','Projects','','','projects');
    searchOption.append(opt,opt1,opt2);
    // search input feild
    const searchInput=createInput('search-input','search');
    searchContainer.append(title,searchOption,searchInput);
    return searchContainer;
}