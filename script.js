// Visit counter functionality
let visitCount = 0;

function updateVisitCount() {
    visitCount = parseInt(localStorage.getItem('visitCount') || '0');
    visitCount++;
    localStorage.setItem('visitCount', visitCount.toString());
    document.getElementById('visitCount').textContent = visitCount;
}

// Greeting feature
document.getElementById('greetBtn').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput');
    const greetingMessage = document.getElementById('greetingMessage');
    const name = nameInput.value.trim();
    
    if (name) {
        const hour = new Date().getHours();
        let greeting;
        
        if (hour < 12) {
            greeting = 'Good morning';
        } else if (hour < 18) {
            greeting = 'Good afternoon';
        } else {
            greeting = 'Good evening';
        }
        
        greetingMessage.textContent = `${greeting}, ${name}! Welcome to your dashboard! 👋`;
    } else {
        greetingMessage.textContent = 'Please enter your name first!';
    }
});

// Allow Enter key to trigger greeting
document.getElementById('nameInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('greetBtn').click();
    }
});

// Initialize on page load
window.addEventListener('load', function() {
    updateVisitCount();
});
