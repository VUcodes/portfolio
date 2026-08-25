import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const initParticles = async () => {

    const container = document.getElementById("particles-js");

    if (!container) return;

    await loadSlim(tsParticles);

    await tsParticles.load({
        id: "particles-js",
        options: {

            background: {
                color: {
                    value: "transparent"
                }
            },

            fpsLimit: 60,

            particles: {

                number: {
                    value: 80,
                    density: {
                        enable: true
                    }
                },

                color: {
                    value: [
                        "#2563eb",
                        "#8b5cf6",
                        "#06b6d4"
                    ]
                },

                links: {
                    enable: true,
                    distance: 150,
                    color: "#2563eb",
                    opacity: 0.3
                },

                move: {
                    enable: true,
                    speed: 2,
                    outModes: {
                        default: "bounce"
                    }
                },

                opacity: {
                    value: 0.5
                },

                size: {
                    value: {
                        min: 1,
                        max: 4
                    }
                }

            },

            interactivity: {

                events: {

                    onHover: {
                        enable: false,
                        mode: "grab"
                    },

                    onClick: {
                        enable: true,
                        mode: "push"
                    }

                },

                modes: {

                    grab: {
                        distance: 180
                    },

                    push: {
                        quantity: 4
                    }

                }

            },

            detectRetina: true

        }
    });

};

export default initParticles;