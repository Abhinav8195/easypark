export const initAnimations = () => {
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) return;

      let delay = 0;
      const el = entry.target;

      if (el.classList.contains('pricing-slide-left')) delay = 0;
      else if (el.classList.contains('pricing-scale-up')) delay = 200;
      else if (el.classList.contains('pricing-slide-right')) delay = 400;
      else delay = index * 80;

      setTimeout(() => {
        el.classList.add('animate');

        // Special handling for pricing cards
        if (
          el.classList.contains('pricing-slide-left') ||
          el.classList.contains('pricing-scale-up') ||
          el.classList.contains('pricing-slide-right')
        ) {
          const header = el.querySelector('.pricing-header');
          const price = el.querySelector('.price-bounce');
          const features = el.querySelectorAll('.feature-slide-in');
          const button = el.querySelector('.button-float');

          setTimeout(() => header?.classList.add('animate'), 200);
          setTimeout(() => price?.classList.add('animate'), 400);
          features.forEach((feature, i) => {
            setTimeout(() => {
              feature.classList.add('animate');
              feature.querySelector('.checkmark-bounce')?.classList.add('animate');
            }, 600 + i * 100);
          });
          setTimeout(() => button?.classList.add('animate'), 1000);
        }
      }, delay);
    });
  }, observerOptions);

  document.querySelectorAll(
    '.fade-in, .slide-in, .slide-in-right, .scale-in, .rotate-in, .blur-in, .pricing-slide-left, .pricing-scale-up, .pricing-slide-right, .fade-in-up, .price-bounce, .feature-slide-in, .checkmark-bounce, .button-float'
  ).forEach(el => observer.observe(el));

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Nav background on scroll
  const nav = document.querySelector('.nav-modern');
  window.addEventListener('scroll', () => {
    if (!nav) return;
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(0, 0, 0, 0.95)';
      nav.style.borderBottom = '1px solid rgba(152, 134, 134, 0.2)';
    } else {
      nav.style.background = 'rgba(0, 0, 0, 0.9)';
      nav.style.borderBottom = '1px solid rgba(152, 134, 134, 0.1)';
    }
  });

  // Button interactions
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const text = button.textContent.trim();
      if (text.includes('Get Started')) document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
      // else alert(`Button clicked: ${text}`);
    });
  });

  // Parallax floating effect
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.floating').forEach(el => {
      el.style.transform = `translateY(${scrolled * 0.5}px) rotate(-1deg)`;
    });
  });
};


  