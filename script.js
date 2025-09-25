// scroll smooth
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// navbar
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    scrollToSection(targetId);
  });
});

// submit form
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Pesan berhasil dikirim!");
  this.reset();
});

// expanded project (klik view more)
document.querySelectorAll('.project-card .toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.parentElement;
    card.classList.toggle('expanded');

    if (card.classList.contains('expanded')) {
      btn.textContent = "View Less";
    } else {
      btn.textContent = "View More";
    }
  });
});
