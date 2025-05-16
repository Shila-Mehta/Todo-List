import createElement from "./createElement";

export  default function createColorDropDown(){
    const select=createElement('select','select-element',);
    const option=createElement('option','','color','','','color');
    const option1=createElement('option','','purple','','','purple');
    const option2=createElement('option','','green','','','green');
    const option3=createElement('option','','red','','','red');
    const option4=createElement('option','','blue','','','blue');
    const option5=createElement('option','','pink','','','pink');
    select.append(option,option1,option2,option3,option4,option5);
    return select;
}