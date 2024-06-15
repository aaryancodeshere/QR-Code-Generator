const url= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

let input = document.getElementById("content");
let button = document.getElementById("generate");
let img = document.getElementById("qrcode");
let imgbox = document.getElementById("imgbox");


 button.addEventListener("click", async ()=>{
    //let data = await getqr();
    let data = input.value;
    if(data.length>0){
        img.src= url+input.value;
        imgbox.classList.add("show-image");   
    }
    else{
        alert("Please add some text");        
    }
     
    
 }
 )


