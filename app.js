// Mobile menu button par click function
const mobileMenuBtn = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', function() {
    // Jab mobile icon par click hoga, to aap yahan side-nav open karwa sakte hain
    // Filhal ke liye main ne console message rakha ha taake testing ho jaye
    console.log("Hamburger Menu Clicked! Mobile nav opening...");

    // Agar alert check karna chahein to isko uncomment kar lein:
    // alert("Mobile Menu Opened!");
});
// Search Box Focus Effect
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('focus', () => {
    searchInput.style.borderColor = '#fff';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.borderColor = '#444';
});

// Pause/Play Button Toggle logic (Optional placeholder)
const pauseBtn = document.querySelector('.blue-btn');
pauseBtn.addEventListener('click', () => {
    const icon = pauseBtn.querySelector('i');
    icon.classList.toggle('fa-pause');
    icon.classList.toggle('fa-play');
});

//3rd section//
// Featured News Cards par click event
const newsCards = document.querySelectorAll('.news-card');

newsCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.card-bottom h3, .card-bottom h4').innerText;
        console.log("Navigating to article: " + title);
        // alert("Aap is article par ja rahe hain: " + title);
    });
});