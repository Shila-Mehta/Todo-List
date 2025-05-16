 import projectForm from "../../Forms/ProjectForm";

export default function projectClick(content){
     content.innerHTML='';
 //   rendering project form
      content.append(projectForm());
}