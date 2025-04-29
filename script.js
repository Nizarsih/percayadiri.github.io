
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "Yeay! dia sadar kalau dia cantik";
});

document.getElementById('noButton').addEventListener('click', function() {
    const noButton = document.getElementById('noButton');
    const randomX = Math.floor(Math.random() * 200) - 100; // Random X position
    const randomY = Math.floor(Math.random() * 200) - 100; // Random Y position
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noButton.style.transition = "transform 0.5s ease"; // Smooth transition
    document.getElementById('response').textContent = "Kenapa kamu tidak percaya diri :(?";
});