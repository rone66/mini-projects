const plusbtn=document.querySelector('.plus'),
minusbtn=document.querySelector('.minus'),
num=document.querySelector('.number')
resetbtn=document.querySelector('.reset');

let a=0;

plusbtn.addEventListener("click", ()=>{
    a++;
    num.innerText=a;
    //console.log(a);
});
minusbtn.addEventListener("click",()=> {
    //a--;
    if(a==0){
        return;
    }
    a--;
    num.innerText=a;
 
});
resetbtn.addEventListener("click",()=> {
    a=0
    num.innerText=a;
})
