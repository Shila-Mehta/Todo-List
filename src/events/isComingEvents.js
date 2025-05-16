import renderUpcoming from "../pages/upComing";
const content= document.querySelector('.content');

export  default  function upComingEvents(){
    document.body.addEventListener('click',(e)=>{

        if(e.target.classList.contains('upcoming')){
          content.innerHTML='';
          content.append(renderUpcoming());
        }
    })
}