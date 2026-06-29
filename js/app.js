// 黑客开机动画
const bootLines = [
    "> INITIALIZING SYSTEM...",
    "> LOADING MODULES...",
    "> CHECKING SECURITY...",
    "> CONNECTING NETWORK...",
    "> STARTING AI ENGINE...",
    "> ACCESS GRANTED",
    "",
    "> WELCOME BACK, SIYU"
];

let bootIndex = 0;

function bootAnimation() {

    const text =
        document.getElementById(
            "boot-text"
        );

    if (!text) return;

    if (
        bootIndex <
        bootLines.length
    ) {

        text.innerHTML +=
            bootLines[
                bootIndex
            ] + "<br>";

        bootIndex++;

        setTimeout(
            bootAnimation,
            500
        );

    } else {

        setTimeout(() => {

            document
                .getElementById(
                    "boot-screen"
                )
                .classList
                .add(
                    "boot-hide"
                );

        }, 1200);
    }
}

bootAnimation();


// 打字机效果
const texts = [
    "全栈开发者",
    "Python 开发者",
    "AI 技术探索者",
    "网络安全爱好者",
    "Cyber Security"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const el =
        document.getElementById(
            "typing"
        );

    if (!el) return;

    const current =
        texts[textIndex];

    if (!deleting) {
        charIndex++;
    } else {
        charIndex--;
    }

    el.innerHTML =
        current.substring(
            0,
            charIndex
        );

    if (
        !deleting &&
        charIndex ===
            current.length
    ) {
        deleting = true;
        setTimeout(
            typeEffect,
            1500
        );
        return;
    }

    if (
        deleting &&
        charIndex === 0
    ) {

        deleting = false;
        textIndex++;

        if (
            textIndex >=
            texts.length
        ) {
            textIndex = 0;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 120
    );
}

typeEffect();


// 联系我按钮
function copyWechat() {

    navigator.clipboard
        .writeText(
            "+1 778 830 0388"
        );

    alert(
        "微信号已复制：+1 778 830 0388"
    );
}
