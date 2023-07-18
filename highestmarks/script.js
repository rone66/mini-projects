const marks=[];
let s1=document.getElementById("st1");
let s2=document.getElementById("st2");
let s3=document.getElementById("st3");
let s4=document.getElementById("st4");
let s5=document.getElementById("st5");

document.querySelector("#btn").addEventListener("click",function(){
    marks.push(s1.value);
    marks.push(s2.value);
    marks.push(s3.value);
    marks.push(s4.value);
    marks.push(s5.value);
    //console.log(marks);
    let maxNum=+marks[0];
    for (const i of marks) {
        if(+i>maxNum){
            maxNum=+i;
        }
    }
   // console.log(maxNum);
    for (let i=0;i<marks.length; i++) {
        //console.log(marks[i]);
        (marks[i]==maxNum) ? document.querySelector("#display").innerHTML= "Highest score obtained by student"+(i+1)+" scrore= "+ maxNum :  document.getElementById("display").value='none';
        
    }


})