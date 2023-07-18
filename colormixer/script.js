const c1=document.querySelector("#cr1");
const c2=document.querySelector("#cr2");
//console.log(c1,c2);

//
document.getElementById("btn").addEventListener('click',function(event){
    let fc=c1.value.toLowerCase();
    let sc=c2.value.toLowerCase();
    event.preventDefault();
    console.log(fc,sc);
    switch (fc) {
        case "red":
            {
                switch (sc) {
                    case "blue":
                        document.querySelector('body').style.background="purple";
                        document.querySelector('#tag').innerHTML="";
                        break;
                    
                    case "yellow":
                        document.querySelector('body').style.background="orange";
                        document.querySelector('#tag').innerHTML="";
                        break;
                    default:
                        document.querySelector('#tag').innerHTML="Invalid combination";
                        break;
                }
            }
            break;
        case "blue":
            {
                switch (sc) {
                    case "red":
                        document.querySelector('body').style.background="purple";
                        document.querySelector('#tag').innerHTML="";
                        break;
                    case "yellow":
                        document.querySelector('body').style.background="green";
                        document.querySelector('#tag').innerHTML="";
                        break;
                    default:
                        document.querySelector('body').style.background="white";
                        document.querySelector('#tag').innerHTML="Invalid combination";
                        break;
                }
            }
            break;
            case "yellow":
                {
                    switch (sc) {
                        case "red":
                            document.querySelector('body').style.background="orange";
                            document.querySelector('#tag').innerHTML="";
                            break;
                        case "blue":
                            document.querySelector('body').style.background="green";
                            document.querySelector('#tag').innerHTML="";
                            break;
                        default:
                            document.querySelector('body').style.background="white";
                            document.querySelector('#tag').innerHTML="Invalid combination";
                            break;
                    }
                }
                break;
        default:
            document.querySelector('body').style.background="white";
            document.querySelector('#tag').innerHTML="Invalid combination";
            break;
    }
})
