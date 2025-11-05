var menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    var nav = document.getElementById('navList');
    var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    if (nav.style.display === 'block') {
      nav.style.display = '';
    } else {
      nav.style.display = 'block';
    }
  });
}

// dropdown: basic show/hide on click
var dropdownLinks = document.querySelectorAll('.has-dropdown > a');
for (var i = 0; i < dropdownLinks.length; i++) {
  (function (idx) {
    dropdownLinks[idx].addEventListener('click', function (e) {
      e.preventDefault();
      var parent = this.parentElement;
      var dd = parent.querySelector('.dropdown');
      if (dd.style.display === 'block') dd.style.display = '';
      else dd.style.display = 'block';
    });
  })(i);
}

// clocks Jakarta and Edinburgh
function updateClocks() {
  try {
    var nowJakarta = new Date().toLocaleTimeString('en-GB', {timeZone: 'Asia/Jakarta'});
    var nowLondon = new Date().toLocaleTimeString('en-GB', {timeZone: 'Europe/London'});
    var elJ = document.getElementById('timeJakarta');
    var elE = document.getElementById('timeEdinburgh');
    var elJ2 = document.getElementById('timeJakarta_small');
    var elE2 = document.getElementById('timeEdinburgh_small');
    if (elJ) elJ.textContent = nowJakarta;
    if (elE) elE.textContent = nowLondon;
    if (elJ2) elJ2.textContent = nowJakarta + ' (Jakarta)';
    if (elE2) elE2.textContent = nowLondon + ' (Edinburgh)';
  } catch (err) {
    // ignore if browser doesn't support timeZone option
  }
}
updateClocks();
setInterval(updateClocks, 1000);

// simple form validation for registration
var regForm = document.getElementById('regForm');
if (regForm) {
  regForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var note = document.getElementById('regNote');
    if (!name || !email) {
      note.textContent = 'Please fill name and email.';
      note.style.color = '#b23a3a';
      return;
    }
    note.textContent = 'Thank you — registration received (demo).';
    note.style.color = '#236b36';
    regForm.reset();
  });
}

// contact form simple
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var cname = document.getElementById('cname').value.trim();
    var cemail = document.getElementById('cemail').value.trim();
    var note = document.getElementById('contactNote');
    if (!cname || !cemail) {
      note.textContent = 'Please fill name and email.';
      note.style.color = '#b23a3a';
      return;
    }
    note.textContent = 'Message sent (simulated).';
    note.style.color = '#236b36';
    contactForm.reset();
  });
}
