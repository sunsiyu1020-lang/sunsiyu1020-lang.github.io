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
// 项目详情
function openProject(type) {
    const modal =
        document.getElementById(
            "projectModal"
        );
    const content =
        document.getElementById(
            "projectContent"
        );
    let html = "";
    switch (type) {
        case "wx":
            html = `
            <h1>微信小程序开发</h1>
            <br>
            <p>✔ 商城小程序</p >
            <p>✔ 点餐系统</p >
            <p>✔ 预约系统</p >
            <p>✔ 企业展示小程序</p >
            <br>
            <p>开发周期：3~15天</p >
            `;
            break;
        case "software":
            html = `
            <h1>软件开发</h1>
            <br>
            <p>✔ 管理系统开发</p >
            <p>✔ 自动化工具</p >
            <p>✔ 桌面软件开发</p >
            `;
            break;
        case "ai":
            html = `
            <h1>AI换脸</h1>
            <br>
            <p>✔ 视频换脸</p >
            <p>✔ 直播换脸</p >
            <p>✔ 多平台兼容</p >
            `;
            break;
        case "gps":
            html = `
            <h1>Android + iPhone定位</h1>
            <br>
            <p>✔ 实时定位</p >
            <p>✔ 历史轨迹</p >
            <p>✔ 设备管理</p >
            `;
            break;
        case "web":
            html = `
            <h1>网页搭建</h1>
            <br>
            <p>✔ 企业官网</p >
            <p>✔ 展示网站</p >
            <p>✔ 响应式网页</p >
            `;
            break;
        case "ios":
            html = `
            <h1>苹果软件多开</h1>
            <br>
            <p>✔ 一机多号</p >
            <p>✔ 多账号运行</p >
            <p>✔ 稳定管理</p >
            `;
            break;
        case "kali":
            html = `
            <h1>Kali 收徒</h1>
            <br>
            <p>✔ Linux基础</p >
            <p>✔ 网络安全</p >
            <p>✔ 渗透测试实战</p >
            `;
            break;
    }
    content.innerHTML = html;
    modal.classList.add("open");
}
function closeProject() {
    document
        .getElementById(
            "projectModal"
        )
        .classList.remove(
            "open"
        );
}
