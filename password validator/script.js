
function validation(){
let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;
//console.log(email,pass);

let pattern = /^[^.]+@[^.]+\.[A-z]{2,3}$/;

if(email.match(pattern)){
    document.querySelector("#greentick1").style.display="flex";
}
else{
    document.querySelector("#greentick1").style.display="none";
}
}
function passValidation(){
    let pass=document.getElementById("pass").value;
    if(pass.length>=8){
        document.querySelector("#greentick2").style.display="flex";
    }
    else{
        document.querySelector("#greentick2").style.display="none";
    }
}
document.querySelector("#login").addEventListener('click',()=>{
    if(document.querySelector("#greentick1").style.display=="flex" && document.querySelector("#greentick2").style.display=="flex" ){
        alert("submitted successfully!!...loading ");
    }else{
        alert("please check email or pasword");
    }
})