// 打字机效果
const texts = [
    "全栈开发者",
    "Python 开发",
    "AI 技术探索",
    "Web 开发",
    "网络安全研究"
];
let textIndex = 0;
let charIndex = 0;
let deleting = false;
function typeEffect() {
    const el = document.getElementById("typing");
    if (!el) return;
    const current = texts[textIndex];
    if (!deleting) {
        charIndex++;
    } else {
        charIndex--;
    }
    el.innerHTML = current.substring(0, charIndex);
    if (!deleting && charIndex === current.length) {
        deleting = true;
        setTimeout(typeEffect, 1800);
        return;
    }
    if (deleting && charIndex === 0) {
        deleting = false;
        textIndex++;
        if (textIndex >= texts.length) {
            textIndex = 0;
        }
    }
    setTimeout(typeEffect, deleting ? 60 : 120);
}
typeEffect();
// 联系我
function contactMe() {
    window.open(
        "https://wa.me/17788300388",
        "_blank"
    );
}
function show(type){

let html='';

if(type=='wx'){
html=`
<h1>微信小程序开发</h1>
<p>开发周期：3~15天</p >
<p>支持商城、预约、工具类小程序。</p >
`;
}

if(type=='soft'){
html=`
<h1>软件开发</h1>
<p>Windows软件、管理系统、自动化工具。</p >
`;
}

if(type=='ai'){
html=`
<h1>AI换脸</h1>
<p>支持视频换脸、直播换脸、多平台兼容。</p >
`;
}

if(type=='gps'){
html=`
<h1>Android+iPhone定位</h1>
<p>实时定位、轨迹记录、安全守护。</p >
`;
}

if(type=='web'){
html=`
<h1>网页搭建</h1>
<p>个人网站、企业官网、展示页面开发。</p >
`;
}

if(type=='ios'){
html=`
<h1>苹果软件多开</h1>
<p>支持多个账号独立运行。</p >
`;
}

if(type=='kali'){
html=`
<h1>Kali 收徒</h1>
<p>网络安全基础、渗透测试、实战教学。</p >
`;
}

html+=`
<br><br>
<button onclick="closeWin()">
关闭
</button>
`;

document.getElementById('detail').style.display='block';
document.getElementById('content').innerHTML=html;

}

function closeWin(){
document.getElementById('detail').style.display='none';
}
        .classList.remove(
            "open"
        );
}
