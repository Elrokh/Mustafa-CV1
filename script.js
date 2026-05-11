// ─── CUSTOM CURSOR ───────────────────────────────────────────
const cursor    = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.14;
  ringY += (mouseY - ringY) * 0.14;

  cursor.style.transform     = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
  cursorRing.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor expand on interactive elements
document.querySelectorAll('a, button, .skill-chip, .project-card, .stat-box').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursorRing.style.width   = '52px';
    cursorRing.style.height  = '52px';
    cursorRing.style.borderColor = 'rgba(0, 212, 255, 0.9)';
  });
  el.addEventListener('mouseleave', () => {
    cursorRing.style.width   = '32px';
    cursorRing.style.height  = '32px';
    cursorRing.style.borderColor = 'rgba(0, 212, 255, 0.5)';
  });
});

// ─── NAVBAR SCROLL ───────────────────────────────────────────
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ─── REVEAL ON SCROLL ────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 90);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

revealEls.forEach(el => observer.observe(el));
