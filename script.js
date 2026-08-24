    const timer = document.getElementById("timer");
    const raceDate = new Date("2026-09-06T18:00:00");
    function updateTimer() {
        const now = new Date();
        const difference = raceDate - now;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
        );

        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );

        const seconds = Math.floor(
            (difference / 1000) % 60
        );
        document.getElementById("timer").textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

        }

        updateTimer();
        setInterval(updateTimer, 1000);
