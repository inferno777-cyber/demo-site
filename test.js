let salebox=["1	LBAC-0040037	Acer Aspire Lite AL15-42P-R3Q5 R5-7430U (16/512) 15.6INCH	1	iSolution.Models.ComplexModels.Usr_Code_PriceLevel_Complex	250,000	250,000		fwf"]
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
let s4=s3.flat(1);
console.log(s4);
let p=s4.at(-2);
salepbox.push(p);
let num=salepbox.map(Number);
let answer=num.reduce((acc,n)=>acc+n,0);
