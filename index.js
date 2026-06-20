/* ═══════════════════════════════════════════════════════════════
   INDEX.JS - منطق صفحة صراع الأزل
   ═══════════════════════════════════════════════════════════════ */

/**
 * Scroll Reveal - كشف العناصر عند التمرير
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal, .image-card, .cta-section');

  const reveal = () => {
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150; // المسافة من الأسفل

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', reveal);
  reveal(); // Call once on load
}

/**
 * Parallax Effect - تأثير المنظور العميق
 */
function initParallax() {
  const chapters = document.querySelectorAll('.chapter');

  window.addEventListener('scroll', () => {
    chapters.forEach((chapter) => {
      const scrollPosition = window.scrollY;
      const chapterTop = chapter.offsetTop;
      const chapterHeight = chapter.offsetHeight;

      if (scrollPosition + window.innerHeight > chapterTop && scrollPosition < chapterTop + chapterHeight) {
        const relativeScroll = scrollPosition - chapterTop + window.innerHeight;
        const offset = relativeScroll * 0.3; // Parallax factor

        chapter.style.backgroundPosition = `center ${-offset}px`;
      }
    });
  });
}

/**
 * Mouse Glow Effect - تأثير الإضاءة الذهبية تتبع الفأرة
 */
function initMouseGlow() {
  document.addEventListener('mousemove', (e) => {
    const chapters = document.querySelectorAll('.chapter');

    chapters.forEach((chapter) => {
      const rect = chapter.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      chapter.style.setProperty('--mouse-x', `${x}%`);
      chapter.style.setProperty('--mouse-y', `${y}%`);
    });
  });
}

/**
 * CTA Button Navigation - التنقل من الأزرار
 */
function initCTAButtons() {
  document.querySelectorAll('.cta-button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const target = button.getAttribute('href') || button.dataset.target;

      if (target && target.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (target && (target.startsWith('http') || target.startsWith('pages/'))) {
        window.location.href = target;
      }
    });
  });
}

/**
 * Image Gallery Hover Effects - تأثيرات الصور
 */
function initImageGallery() {
  const imageCards = document.querySelectorAll('.image-card');

  imageCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      imageCards.forEach((c) => {
        if (c !== card) c.style.opacity = '0.5';
      });
    });

    card.addEventListener('mouseleave', () => {
      imageCards.forEach((c) => {
        c.style.opacity = '1';
      });
    });
  });
}

/**
 * Text Animation - تحريك النصوص بحرف واحد
 */
function initTextAnimation() {
  const arabicTexts = document.querySelectorAll('.chapter-ar');

  arabicTexts.forEach((text) => {
    const originalText = text.textContent;
    text.textContent = '';

    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < originalText.length) {
        text.textContent += originalText[index];
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30); // Speed of typing
  });
}

/**
 * Stagger Animation - تحريك متسلسل للعناصر
 */
function staggerAnimation(selector, baseDelay = 0) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((el, index) => {
    el.style.animationDelay = `${baseDelay + index * 0.1}s`;
  });
}

/**
 * Chapter Scroll Navigation - تمييز الفصل الحالي
 */
function initChapterNavigation() {
  const chapters = document.querySelectorAll('.chapter');

  window.addEventListener('scroll', () => {
    chapters.forEach((chapter) => {
      const rect = chapter.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        // يمكن استخدام هذا لتحديث الـ navbar
        const chapterIndex = Array.from(chapters).indexOf(chapter);
        console.log(`Current chapter: ${chapterIndex}`);
      }
    });
  });
}

/**
 * Fade In Delay - تأخير الظهور للعناصر
 */
function initFadeInDelay() {
  const fadeElements = document.querySelectorAll('[data-fade-delay]');

  fadeElements.forEach((el) => {
    const delay = el.dataset.fadeDelay;
    el.style.animationDelay = `${delay}s`;
  });
}

/**
 * Social Links or Deep Links - الروابط الخارجية
 */
function initExternalLinks() {
  document.querySelectorAll('a[data-external]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const url = link.href;

      // Open in new tab
      window.open(url, '_blank');
    });
  });
}

/**
 * Intersection Observer - مراقبة دخول العناصر للشاشة
 */
function initIntersectionObserver() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optionally unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Chapter Background Animation - تأثيرات الخلفية
 */
function initChapterBackgroundAnimation() {
  const chapters = document.querySelectorAll('.chapter');

  chapters.forEach((chapter, index) => {
    if (index % 2 === 0) {
      chapter.classList.add('bg-light-mode');
    }
  });
}

/**
 * Smooth Scroll Behavior - التمرير السلس
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

/**
 * Performance: Lazy Load Images
 */
function initLazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Initialize All - تشغيل جميع الدوال
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🔱 INDEX.JS Initialized');

  initScrollReveal();
  initParallax();
  initMouseGlow();
  initCTAButtons();
  initImageGallery();
  initTextAnimation();
  initChapterNavigation();
  initFadeInDelay();
  initExternalLinks();
  initIntersectionObserver();
  initChapterBackgroundAnimation();
  initSmoothScroll();
  initLazyLoadImages();

  // Stagger animations for image cards
  staggerAnimation('.image-card', 0.1);

  // Log ready status
  console.log('✓ All index.js features activated');
});

/**
 * Window Resize Handler - معالج تغيير حجم النافذة
 */
window.addEventListener('resize', () => {
  // Re-calculate any layout-dependent animations if needed
});
