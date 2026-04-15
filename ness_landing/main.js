document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.magic-particles');
  const particleCount = 60; // Slightly more particles for better visual effect

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Distribute particles across the viewport
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    
    // Vary the sizes to add depth
    const size = Math.random() * 2.5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Randomize the animation delays to create a chaotic, natural glowing effect
    const delay = Math.random() * 5;
    const duration = Math.random() * 4 + 3; // 3 to 7 seconds duration
    
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    
    container.appendChild(particle);
  }
});
