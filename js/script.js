/**
 * PseudoSense Portfolio — Interactive Logic
 * Handles section navigation, smooth scrolling, and matrix form submissions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation drawer toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href')?.substring(1);
      if (!targetId) return;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Specification matrix form submission handler
  const matrixForm = document.getElementById('matrix-inquiry-form');
  if (matrixForm) {
    matrixForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const button = matrixForm.querySelector('button[type="submit"]');
      if (button) {
        button.innerHTML = '<span>Transmitting...</span>';
        setTimeout(() => {
          button.innerHTML = '<span>Transmission Confirmed ✓</span>';
          button.classList.add('bg-emerald-500');
        }, 600);
      }
    });
  }
});
