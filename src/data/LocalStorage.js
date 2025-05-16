const STORAGE_KEY='myAppProjects';

export  function  saveProjectsToStorage(projects){
localStorage.setItem(STORAGE_KEY,JSON.stringify(projects));
}


export  function loadProjectsFROMSTORAGE(){
    const data=localStorage.getItem(STORAGE_KEY);
    if(!data) return null;

    return JSON.parse(data);
}