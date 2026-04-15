document.addEventListener('DOMContentLoaded', () => {
    // Text animation logic
    const p = document.querySelector('.info-main-text');
    if (p) {
        const text = p.textContent.trim();
        const words = text.split(/\s+/);
        p.innerHTML = '';
        
        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            
            for (let i = 0; i < word.length; i++) {
                const charSpan = document.createElement('span');
                charSpan.textContent = word[i];
                charSpan.classList.add('anim-char');
                wordSpan.appendChild(charSpan);
            }
            
            p.appendChild(wordSpan);
            if (wordIndex < words.length - 1) {
                p.appendChild(document.createTextNode(' '));
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const chars = entry.target.querySelectorAll('.anim-char');
                    chars.forEach((char, index) => {
                        setTimeout(() => {
                            char.style.color = '#2A2ECD';
                        }, index * 20); // 20ms delay per letter
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 }); // trigger when at least 30% visible

        observer.observe(p);
    }
});
