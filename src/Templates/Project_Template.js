
export  default  function  Project(name,color){
 this.id=crypto.randomUUID();
 this.name=name;
 this.color=color;
 this.todos=[];

 this.addTodo=(todo)=>{
    this.todos.push(todo);
 }

//  this.removeTodoById=(id)=>{
//     const id= this.todos.findIndex((id)=> todo.id===id);
//     if(index!==-1){
//         this.todos.splice(index,1);
//     }
//  }

 this.removeTodoByIndex=(index)=>{
    this.todos.splice(index,1);
 }
}