const affiliateLink = 'https://wref.short.gy/M1MASp';

document.querySelectorAll('.js-aff').forEach((item) => {
  item.setAttribute('href', affiliateLink);
  item.setAttribute('target', '_blank');
  item.setAttribute('rel', 'nofollow sponsored noopener');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
