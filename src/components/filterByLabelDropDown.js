import createElement from "./createElement";
import { labels } from "../data/LabelData";
export default  function filterByLabelDropDown(){

      const DropDown=createElement('select','Label-DropDown');
    
      const defaultOption=createElement('option','LabelOption','All Labels','','','All Labels');
       DropDown.append(defaultOption);

     labels.forEach((label)=>{
         const option=createElement('option','LabelOption',label,'','',label);
         DropDown.append(option);
     })
   
    return DropDown;
   
}
