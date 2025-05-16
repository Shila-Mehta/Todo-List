import filterByLabelDropDown from "../components/filterByLabelDropDown";
import renderfilterByLabel from "../pages/Labels";

const content=document.querySelector('.content');
export default  function LabelEvents(){
    document.body.addEventListener('click',(e)=>{
        
        if(e.target.classList.contains('label')){
           content.innerHTML='';

           const dropDown=filterByLabelDropDown();
           content.append(dropDown);

           dropDown.addEventListener('change',(e)=>{        
            const selectedLabel=e.target.value;
            const filterdContent=renderfilterByLabel(selectedLabel);
            const existingFilteredContent=document.querySelector('.filterByLabel_container');
            
            if(existingFilteredContent){
                existingFilteredContent.remove();
            }

           content.append(filterdContent);           
        })

        

        }
    })
}