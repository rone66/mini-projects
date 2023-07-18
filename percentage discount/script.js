let pI=document.getElementById("price");
let dI=document.getElementById("discount");

dI.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        calculate();
    }
})
document.getElementById("btn").addEventListener('click',()=>{
    calculate();
})
function calculate(){
    let p=pI.value;
    let d=dI.value;
   // console.log(p,d);
   let a=Math.round(((p-d)/p)*100);
   document.getElementById("display").innerText=`You have got ${a}% discount`;
}