// mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');
  toggle.addEventListener('click', () => {
    const open = navList.style.display === 'flex';
    navList.style.display = open ? 'none' : 'flex';
    navList.style.cssText += open ? '' : 'position:absolute; top:64px; left:0; right:0; flex-direction:column; background:#F8F1E4; padding:20px 24px; gap:16px; border-bottom:1px solid rgba(36,26,20,0.12);';
  });

  // scroll reveal
  const revealEls = document.querySelectorAll('.coll-card, .review-card, .info-row, .about-visual, .swatch-ribbon');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.style.transition = 'opacity .6s ease, transform .6s ease';
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    io.observe(el);
  });
