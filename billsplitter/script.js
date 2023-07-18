let dishValue=document.getElementById("dishes");
let arr=[];
let add=document.getElementById("add");
let sum;

add.addEventListener('click',function(e){
   e.preventDefault();
   sumitem();
   
});
dishValue.addEventListener('keydown',(event)=>{
    //event.preventDefault();
    if(event.key === 'Enter'){
        sumitem();
    }
})
function sumitem(){
    arr.push(dishValue.value);

    sum= arr.reduce(function(res,i){
        return res+(Number(i));
        },0);
    dishValue.value='';    
    document.getElementById("total").innerText='Total: $'+sum;
    return sum;
}

let people=document.getElementById('epinput');
let split=document.getElementById('Split');

split.addEventListener('click',function(e){
    e.preventDefault();
    //let s=sumitem();
    document.getElementById('as').innerText=`split in ${people.value} people the value: $`+Math.round((sum/people.value));
})


people.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        document.getElementById('as').innerText=`split in ${people.value} people the value: $`+Math.round((sum/people.value));
        people.value='';
    }
})