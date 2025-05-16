export  default  function isToday(dataString){
    const today=new Date();
    const date=new Date(dataString);
    return (
        today.getDate()===date.getDate() 
        &&  today.getMonth()===date.getMonth()
        &&  today.getFullYear()===date.getFullYear()
    )
}