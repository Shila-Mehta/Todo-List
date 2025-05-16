import createElement from "./createElement";

export default function createButton(className='',text='',id=''){
    const btn=createElement('button',className,text,id);
    return btn;
}