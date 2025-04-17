let cv=0;
let pv=0;
function display(value){
    const a= document.querySelector('.display');
    a.value += value;
}
function cleardisplay(){
    const a=document.querySelector('.display')
    a.value=" ";
}
function clearone(){
    const a=document.querySelector('.display')
    a.value = a.value.slice(0, -1);
}
function answer(){
    const display = document.querySelector('.display');
    try {
        
        const result = eval(display.value);
        
        
        display.value = result;
    } catch (error) {
        
        display.value = 'Error';
    }

}