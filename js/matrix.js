const canvas =
    document.getElementById(
        "matrix"
    );

const ctx =
    canvas.getContext("2d");

canvas.width =
    window.innerWidth;

canvas.height =
    window.innerHeight;

const letters =
"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const size = 16;

const columns =
Math.floor(
    canvas.width / size
);

const drops = [];

for (
    let i = 0;
    i < columns;
    i++
) {
    drops[i] = 1;
}

function drawMatrix() {

    ctx.fillStyle =
        "rgba(2,6,23,0.08)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle =
        "#00d4ff";

    ctx.font =
        size +
        "px monospace";

    for (
        let i = 0;
        i < drops.length;
        i++
    ) {

        const text =
            letters[
                Math.floor(
                    Math.random() *
                    letters.length
                )
            ];

        ctx.fillText(
            text,
            i * size,
            drops[i] * size
        );

        if (
            drops[i] *
                size >
                canvas.height &&
            Math.random() >
                0.975
        ) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(
    drawMatrix,
    35
);

window.addEventListener(
    "resize",
    () => {
        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;
    }
);
