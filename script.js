function nextPage(pageId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Show the targeted section
    const target = document.getElementById(pageId);
    target.classList.add('active');

    // If it's the roast page, play background music
    if(pageId === 'page-roast') {
        let audio = new Audio('assets/audio/birthday.mp3');
        audio.loop = true;
        audio.play().catch(e => console.log("Audio needs user interaction first"));
    }
}

function triggerFakeout() {
    // The "Gotcha" alert
    const choice = confirm("You thought something special might happen? 💀");

    // Even if they click cancel or ok, we show the real surprise
    if (choice || !choice) {
        alert("Wait... look closely. The One Piece is real!");
        nextPage('page-video');
        
        // Auto-play video after a small delay
        setTimeout(() => {
            const vid = document.getElementById('bd-video');
            vid.play();
        }, 500);
    }
}