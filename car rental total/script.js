function show(anything){
    document.querySelector('.text-box').value=anything;
}
//let dropdown=document.querySelector('.category');
function fun1(){
    document.querySelector('.option').style.display='flex';
}
function fun2(){
    document.querySelector('.option').style.display='none';
    document.querySelector('.text-box').value='';
}
let obj={
    'Econmy Car': 4000,
    'Mid-size Car':10000,
    'Luxury Car':20000,
};
let arr=[];

document.querySelector('#add').addEventListener('click', ()=>{
    let a=document.querySelector('.text-box').value;
    let b=document.querySelector('#days').value;
    //console.log(a,b);
    
    for (const i in obj) {
        let c;
        if(i==a){
            c=b*obj[i];
            arr.push(c);
           // alert('details submitted')
        }
    }
   console.log(arr); 
   let sum=arr.reduce(function(res,i){
    return res+i;
    },0);
    document.querySelector('#display').innerHTML='Total: $'+sum;
   
});

