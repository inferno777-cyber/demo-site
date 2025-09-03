let username=document.getElementById("username");
let password=document.getElementById("password");
var alart=document.getElementById("alart");
let send=document.getElementById("send");
let audio=new Audio("https://inferno777-cyber.github.io/audio-demo1/bubble-pop-06-351337.mp3");

send.addEventListener("click",function(){
    audio.play();
    try{
        if(!username.value || !password.value){
            throw new Error("Invaild Username & Passwords");
        }if(username.value!=="Yuta"||password.value!=="7102000"){
            throw new Error("Username & Passwords are incorrect!");
        }alart.innerText="Welcome "+username.value;
        setTimeout(()=>{
            window.location.href="Re.html";},1500);
        
    }catch (err){
        alart.innerText="Error:"+err.message;
    }
})