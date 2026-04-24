(() => {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  // Mobile nav toggle
  const toggle = $('.nav-toggle');
  const links = $('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      links.classList.toggle('open', !open);
    });
    $$('a', links).forEach(a => a.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('open');
    }));
  }

  // Sticky nav border on scroll
  const nav = $('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Play videos on click; pause others
  const frames = $$('.video-frame');
  frames.forEach(frame => {
    const video = $('video', frame);
    if (!video) return;
    const play = () => {
      frames.forEach(f => {
        if (f === frame) return;
        const v = $('video', f);
        if (v && !v.paused) { v.pause(); f.classList.remove('is-playing'); }
      });
      video.muted = false;
      video.play().then(() => frame.classList.add('is-playing')).catch(() => {
        // Fallback: try muted autoplay if browser blocks unmuted
        video.muted = true;
        video.play().then(() => frame.classList.add('is-playing')).catch(() => {});
      });
    };
    const pause = () => { video.pause(); frame.classList.remove('is-playing'); };
    frame.addEventListener('click', () => (video.paused ? play() : pause()));
    video.addEventListener('ended', () => frame.classList.remove('is-playing'));
  });

  // Soft autoplay (muted) when scrolled into view on desktop
  if ('IntersectionObserver' in window && window.matchMedia('(min-width: 720px)').matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const v = $('video', entry.target);
        if (!v || !v.currentSrc) return;
        if (entry.isIntersecting && v.paused && !entry.target.classList.contains('is-playing')) {
          v.muted = true;
          v.play().catch(() => {});
        }
      });
    }, { threshold: 0.55 });
    frames.forEach(f => io.observe(f));
  }

})();
