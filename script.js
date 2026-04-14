function nextPage(pageId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.remove('active'));

    const target = document.getElementById(pageId);
    target.classList.add('active');

    if(pageId === 'page-roast') {
        let audio = new Audio('assets/audio/birthday.mp3');
        audio.loop = true;
        audio.play().catch(e => console.log("Music requires user interaction first"));
    }
}

function triggerFakeout() {
    // The Joke Alert
    const choice = confirm("You thought something special might happen? 💀");

    // Leads to the surprise regardless of OK or Cancel
    alert("Wait... look closely. The One Piece is real!");
    nextPage('page-video');
    
    // Auto-play the video
    setTimeout(() => {
        const vid = document.getElementById('bd-video');
        if (vid) vid.play();
    }, 400);
}
