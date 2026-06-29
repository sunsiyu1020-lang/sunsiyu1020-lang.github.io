// 页面加载动画
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// 联系我
function contactMe() {
    window.location.href =
        "https://wa.me/17788300388";
}

// 打字机效果
const texts = [
    "全栈开发者",
    "Python 开发",
    "AI 技术探索",
    "Web 开发",
    "网络安全爱好者"
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

    el.innerHTML =
        current.substring(0, charIndex);

    if (
        !deleting &&
        charIndex === current.length
    ) {
        deleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }

    if (
        deleting &&
        charIndex === 0
    ) {
        deleting = false;
        textIndex++;

        if (textIndex >= texts.length) {
            textIndex = 0;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();

// 卡片进入动画
const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {
                    entry.target.classList.add(
                        "show"
                    );
                }

            });

        },
        {
            threshold: 0.2
        }
    );

document
    .querySelectorAll(".card")
    .forEach(card => {
        observer.observe(card);
    });

// 科技鼠标光效
document.addEventListener(
    "mousemove",
    e => {

        let light =
            document.getElementById(
                "mouse-light"
            );

        if (!light) {
            light =
                document.createElement(
                    "div"
                );

            light.id =
                "mouse-light";

            document.body.appendChild(
                light
            );
        }

        light.style.left =
            e.clientX + "px";

        light.style.top =
            e.clientY + "px";
    }
);

// 项目详情
function openProject(name) {

    const modal =
        document.getElementById(
            "projectModal"
        );

    const content =
        document.getElementById(
            "projectContent"
        );

    let html = "";

    switch (name) {

        case "wx":
            html = `
            <h2>微信小程序开发</h2>
            <p>✔ 商城系统</p >
            <p>✔ 点餐系统</p >
            <p>✔ 工具类小程序</p >
            <p>开发周期：3-15天</p >
            `;
            break;

        case "software":
            html = `
            <h2>软件开发</h2>
            <p>✔ 管理系统</p >
            <p>✔ 自动化工具</p >
            <p>✔ 定制桌面软件</p >
            `;
            break;

        case "ai":
            html = `
            <h2>AI换脸</h2>
            <p>✔ 视频换脸</p >
            <p>✔ 直播换脸</p >
            <p>✔ 多平台兼容</p >
            `;
            break;

        case "gps":
            html = `
            <h2>Android+iPhone定位</h2>
            <p>✔ 实时定位</p >
            <p>✔ 历史轨迹</p >
            <p>✔ 设备管理</p >
            `;
            break;

        case "web":
            html = `
            <h2>网页搭建</h2>
            <p>✔ 企业官网</p >
            <p>✔ 展示网站</p >
            <p>✔ 响应式设计</p >
            `;
            break;

        case "ios":
            html = `
            <h2>苹果软件多开</h2>
            <p>✔ 一机多号</p >
            <p>✔ 稳定防封</p >
            <p>✔ 多账号管理</p >
            `;
            break;

        case "kali":
            html = `
            <h2>Kali 收徒</h2>
            <p>✔ Linux基础</p >
            <p>✔ 渗透测试</p >
            <p>✔ 安全工具使用</p >
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
