import createButton from "../components/createButton";
import createElement from "../components/createElement";
import createInput from "../components/createInput";
import filterByLabelDropDown from "../components/filterByLabelDropDown";

export  default function  todoForm(){
    // const btn=createButton('todo','new Task');
    const form=createElement('form','todo-form');
    // const title_label=createElement('label','todo-lable','Title');
    const title=createInput('todo-title','text','enter  a title');
    // const  description_label=createElement('label','description-lable','description');
    const description=createElement('textarea','description','description');
    const  dueDate=createInput('duedate','date');
    const prority=createElement('select','priority-dropdown');
    const opt1=createElement('option','high','high','','','high');
    const opt2=createElement('option','medium','medium','',',','medium');
    const opt3=createElement('option','low','low','','','low');
    prority.append(opt1,opt2,opt3);

    const labelDropdown=filterByLabelDropDown();
    const done_btn=createButton('done-btn','create Task');

    form.append(title,description,dueDate,prority,labelDropdown,done_btn);
    return form ;


}