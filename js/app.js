const texts = [
"全栈开发者",
"Python 开发",
"AI 技术探索",
"网络安全研究"
];
let i = 0;
let j = 0;
let del = false;
function typing(){
const el =
document.getElementById("typing");
const text = texts[i];
if(!del){
j++;
}else{
j--;
}
el.innerHTML =
text.substring(0,j);
if(!del && j===text.length){
del=true;
setTimeout(typing,1500);
return;
}
if(del && j===0){
del=false;
i++;
if(i>=texts.length){
i=0;
}
}
setTimeout(
typing,
del?60:120
);
}
typing();
 
