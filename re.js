let salebtn=document.getElementById("sale");
let sys=document.getElementById("sys");
var op1=document.createElement("option")
let audio=new Audio("https://inferno777-cyber.github.io/audio-demo1/startup-sound-variation-6-316850.mp3")
audio.play();
    op1.value="Asus";
    op1.text="Asus";
  
    var op2=document.createElement("option");
    op2.value="HP";
    op2.text="HP";
    
    var op3=document.createElement("option");
    op3.value="MSI";
    op3.text="MSI";
    
    var op4=document.createElement("option");
    op4.value="DEll";
    op4.text="DELL";
    
    var op5=document.createElement("option");
    op5.value="Acer";
    op5.text="Acer";
    
    var op6=document.createElement("option");
    op6.value="MECHREVO";
    op6.text="MECHREVO";
let container=[];
let salebox=[];
let salepbox=[];
let sel;
let answer;

let s4;
       
salebtn.addEventListener("click",function(){
    let audio=new Audio("https://inferno777-cyber.github.io/audio-demo1/metal-clang-sound-81634.mp3");
    audio.play();
    let salein=document.createElement("div");
    sel=document.createElement("select");
    sel.appendChild(op1);
    sel.appendChild(op2);
    sel.appendChild(op3);
    sel.appendChild(op4);
    sel.appendChild(op5);
    sel.appendChild(op6);
    
    let inputt=document.createElement("input");
    let sub=document.createElement("button");
    sub.innerText="Send";
    sub.classList.add("sub");
    inputt.type="text";
    inputt.placeholder="Enter";
    salein.appendChild(sel);
    salein.appendChild(inputt);
    salein.appendChild(sub);
    salein.classList.add("salein");
    sys.appendChild(salein);
    sub.addEventListener("click",function(){
        if (inputt.value!==""){
        salebox.push(inputt.value);
        sys.removeChild(salein);
        let s1=salebox.join(" ");
        let s2=s1.replace(/[\/,_]/g,"");
        let s3=s2.split(" ");
        let m=s3.at(-1);
        let n=m.match(/\d+/g).splice(3,1);
        n.unshift("=");
        s3.pop();
        s3.shift();
        s3.push(n);
        s3.push("Ks")
        s3.unshift(sel.value);
        s4=s3.flat(1);
        let p=s4.at(-2);
        salepbox.push(p);
        let num=salepbox.map(Number);
        answer=num.reduce((acc,n)=>acc+n,0);
        salebox=[];
        container.push(s4);
        document.getElementById("s1").innerText=container.length;
    }
    })
});

let generate=document.getElementById("generate");
generate.addEventListener("click",function(){
    let audio=new Audio("https://inferno777-cyber.github.io/audio-demo1/metal-clang-sound-81634.mp3");
    audio.play();
    let an=document.getElementById("an");
        an.innerText=answer;
       container.forEach((n,index)=>{
        let rep=document.createElement("li");
        rep.classList.add("rep");
        rep.textContent=n.join(" ");
        document.getElementById("re1").appendChild(rep);
    });   
        
        container=[];

})