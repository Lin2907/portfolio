window.addEventListener('load', () => {
  const img = document.querySelector('.profile-image img');
  if (img) {
    img.classList.add('visible');
  }
});

// Modal handling
var modal = document.getElementById("about-me-modal");
var btn = document.getElementById("about-me-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
