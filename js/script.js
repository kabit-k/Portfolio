function clockEngine() {
    const pill = document.getElementById('theme-pill');
    const nptBox = document.getElementById('npt-clock');
    const usrBox = document.getElementById('usr-clock');

    function refresh() {
        const now = new Date();

        // 1. Time Updates
        usrBox.innerText = now.toLocaleTimeString('en-GB', { hour12: false });
        
        nptBox.innerText = new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Asia/Kathmandu',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            hour12: false
        }).format(now);

        // 2. Automated Theme Logic
        const hr = now.getHours();
        const body = document.body;

        if (hr >= 6 && hr < 18) {
            body.classList.remove('dark-mode');
            pill.innerText = "SOLAR PHASE";
        } else {
            body.classList.add('dark-mode');
            pill.innerText = "LUNAR PHASE";
        }
    }

    setInterval(refresh, 1000);
    refresh();
}

document.addEventListener('DOMContentLoaded', clockEngine);