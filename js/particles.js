particlesJS(
    "particles-js",
    {
        particles: {
            number: {
                value: 120
            },

            color: {
                value:
                    "#00d4ff"
            },

            shape: {
                type:
                    "circle"
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: 3,
                random: true
            },

            line_linked: {
                enable: true,
                distance: 150,
                color:
                    "#00d4ff",
                opacity: 0.35,
                width: 1
            },

            move: {
                enable: true,
                speed: 2,
                out_mode: "out"
            }
        },

        interactivity: {

            detect_on:
                "canvas",

            events: {

                onhover: {
                    enable: true,
                    mode:
                        "repulse"
                },

                onclick: {
                    enable: true,
                    mode:
                        "push"
                }
            },

            modes: {

                repulse: {
                    distance: 150
                },

                push: {
                    particles_nb: 4
                }
            }
        },

        retina_detect: true
    }
);
