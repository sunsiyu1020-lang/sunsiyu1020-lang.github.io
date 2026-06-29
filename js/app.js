// 打字机效果
const texts = [
    "全栈开发者",
    "创意科技探索者",
    "Python 开发",
    "AI 技术研究",
    "网络安全爱好者"
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
