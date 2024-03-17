    function makeItRain() {
        let end = Date.now() + (2 * 2000);

        let colors = ['#ff0000', '#ffdb58'];

        function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    }

    window.addEventListener("load", () => {
        makeItRain();
    });