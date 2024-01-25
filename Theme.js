const themebtn=document.getElementById("toggle");

themebtn.onclick = ()=>{
    document.body.classList.toggle("dark-theme");
    
    if (document.body.classList.contains("dark-theme")) {
        themebtn.innerText="Dark Theme";
        console.log("Dark theme");
    }else{
        themebtn.innerText="Light Theme";
        console.log("Light theme");
    }
}
