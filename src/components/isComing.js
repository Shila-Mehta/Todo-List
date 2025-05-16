export  default function isComing(dateString){
    const today=new Date();
    const inputDate=new Date(dateString);
    today.setHours(0,0,0,0);
    inputDate.setHours(0,0,0,0);

    return inputDate> today;
}