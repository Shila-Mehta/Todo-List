
export default function createElement(TagName='',ClassName='',Text='',id='',name='',value=''){
    const element=document.createElement(TagName);
    element.className=ClassName;
    element.textContent=Text;
    element.id=id;
   
    return element;
}