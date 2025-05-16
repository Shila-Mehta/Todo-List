

export default function Todo(title,description,duedate,priority,project='work',label){
    this.id=crypto.randomUUID();
    this.title=title;
    this.description=description;
    this.duedate=duedate;
    this.priority=priority;
    this.completed=false;
    this.checklist=[];
    this.notes='';
    this.project=project;
    this.label=label;

    this.toggleCompleted=()=>{
      return this.completed=!this.completed;
    }

    this.getStatus=()=>{
      return this.completed ? 'completed':'pending';
    }

    this.setStatus=(status)=>{
      this.completed=status==='completed'?true:false;
    }
}