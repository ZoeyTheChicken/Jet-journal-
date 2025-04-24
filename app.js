function ctaClick() {
    alert("You're flowing now 🌀✨");
  }
  
  // ScrollReveal animations
  ScrollReveal({
    distance: '40px',
    duration: 1500,
    easing: 'ease-out',
    origin: 'bottom',
    reset: false
  }).reveal('.hero-content, .section, .feature, .img-card', {
    interval: 100
  });
  
  // Bubbles!
  function createBubble() {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
  
    const size = Math.random() * 30 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
  
    document.body.appendChild(bubble);
  
    bubble.addEventListener("click", () => {
      bubble.classList.add("pop");
      setTimeout(() => bubble.remove(), 400);
    });
  
    setTimeout(() => bubble.remove(), 12000);
  }
  
  setInterval(() => {
    if (document.hasFocus()) {
      createBubble();
    }
  }, 1000);
  
  const cursorBubble = document.getElementById('cursor-bubble');

document.addEventListener('mousemove', (e) => {
  cursorBubble.style.left = `${e.clientX}px`;
  cursorBubble.style.top = `${e.clientY}px`;
  
  // Add a 'following' class to trigger animation
  cursorBubble.classList.add('following');
  
  // Remove 'following' class after animation is done to reset the scale
  setTimeout(() => {
    cursorBubble.classList.remove('following');
  }, 200); // Time for animation to finish
});
