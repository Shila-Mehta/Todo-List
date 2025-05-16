let currentSearchType='todos';

export function setCurrentSearchType(type){
    currentSearchType=type;
}


export  function getCurrentSearchType(){
    return currentSearchType;
}