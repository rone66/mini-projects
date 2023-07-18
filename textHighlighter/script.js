const text=document.getElementById("Text");
document.getElementById("check").addEventListener('click',() => {
    let data=text.value;
    //console.log(data);
    document.getElementById("display").innerHTML= data.split(" ").map(word=>{
       return word.length >=8 ? `<span style="background-color: yellow" >${word}</span>` : word; 
    }).join(" ");
    
   
})
