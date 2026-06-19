/* ============================================================
   MDM1 — GLOBAL FOUNDATION JS
   navbar + particles + cursor + scroll-reveal
   Include on every page, after the DOM (or with defer).
   Expects markup classes from global.css:
     .mdm1-nav, .mdm1-nav__toggle, .mdm1-nav__links
     .mdm1-particles (empty <div> or <canvas> placeholder)
     .mdm1-reveal (on any element you want to fade/slide in)
   ============================================================ */
(function(){
  "use strict";

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- NAVBAR ---------------- */
  function initNavbar(){
    const nav = document.querySelector('.mdm1-nav');
    if(!nav) return;
    const toggle = nav.querySelector('.mdm1-nav__toggle');
    const links  = nav.querySelector('.mdm1-nav__links');

    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive:true });

    if(toggle && links){
      toggle.addEventListener('click', () => {
        const open = toggle.classList.toggle('is-open');
        links.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
      });
      links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          toggle.classList.remove('is-open');
          links.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // mark active link by matching current path
    const current = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('.mdm1-nav__links a').forEach(a => {
      const href = a.getAttribute('href') || '';
      if(href.endsWith(current)) a.classList.add('is-active');
    });
  }

  /* ---------------- CUSTOM CURSOR ---------------- */
  function initCursor(){
    if(reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;

    const dot = document.createElement('div');
    dot.className = 'mdm1-cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'mdm1-cursor-ring';
    document.body.append(dot, ring);

    let ringX = 0, ringY = 0;

    window.addEventListener('mousemove', e => {
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
      ringX = e.clientX; ringY = e.clientY;
    }, { passive:true });

    (function follow(){
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      requestAnimationFrame(follow);
    })();

    document.querySelectorAll('a, button, .mdm1-btn').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('is-active'));
      el.addEventListener('mouseleave', () => ring.classList.remove('is-active'));
    });
  }

  /* ---------------- AMBIENT PARTICLES ---------------- */
  function initParticles(){
    const host = document.querySelector('.mdm1-particles');
    if(!host || reduceMotion) return;

    const canvas = document.createElement('canvas');
    host.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let w, h, particles;
    const COUNT = 38;

    function resize(){
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    function makeParticle(){
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 1.6,
        speed: 0.15 + Math.random() * 0.35,
        drift: (Math.random() - 0.5) * 0.3,
        alpha: 0.15 + Math.random() * 0.35
      };
    }
    function init(){
      resize();
      particles = Array.from({length: COUNT}, makeParticle);
    }
    function tick(){
      ctx.clearRect(0,0,w,h);
      ctx.fillStyle = '#C9A227';
      particles.forEach(p => {
        p.y -= p.speed;
        p.x += p.drift;
        if(p.y < -10){ p.y = h + 10; p.x = Math.random() * w; }
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(tick);
    }

    init();
    window.addEventListener('resize', resize, { passive:true });
    tick();
  }

  /* ---------------- SCROLL REVEAL ---------------- */
  function initReveal(){
    const items = document.querySelectorAll('.mdm1-reveal');
    if(!items.length) return;

    if(reduceMotion || !('IntersectionObserver' in window)){
      items.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    items.forEach(el => io.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initCursor();
    initParticles();
    initReveal();
  });
})();
