import createElement from "../components/createElement";
import createInput from "../components/createInput";
import createColorDropDown from '../components/createColorDropDown';
import createButton from "../components/createButton";
export default function projectForm(){
  const form = createElement('form','project-form');
  const label=createElement('Label','project-label','ProjectName:');
  const Project_name=createInput('project-name','text','Enter your name of project');
  const dropDown=createColorDropDown();
  const btn=createButton('add-btn','create Project');
  form.append(label,Project_name,dropDown,btn);
 
  return form;

}