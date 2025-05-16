import renderToday from "../pages/today";


let content=document.querySelector('.content');

export default  function  TodayEvents(){
    document.body.addEventListener('click',(e)=>{
        if(e.target.classList.contains('today')){
            content.innerHTML='';
            content.append(renderToday());
        }
    })
}