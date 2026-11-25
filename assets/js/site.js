(function () {
  'use strict';

  var root = document.documentElement;

  // ---- Theme toggle (follows the OS setting until the visitor picks one) ----
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      if (!current) {
        current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // ---- Mobile menu ----
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  // ---- Contact form (Formspree, sent with fetch so the visitor stays on the page) ----
  var form = document.querySelector('[data-contact-form]');
  if (form && window.fetch) {
    var status = form.querySelector('.form-status');
    var button = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      button.disabled = true;
      status.className = 'form-status';
      status.textContent = 'Sending…';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.reset();
          status.className = 'form-status ok';
          status.textContent = 'Thanks! Your message has been sent.';
          return;
        }
        return response.json().then(function (data) {
          var msg = data && data.errors ? data.errors.map(function (e) { return e.message; }).join(', ') : '';
          throw new Error(msg || 'Request failed');
        });
      }).catch(function () {
        status.className = 'form-status err';
        status.textContent = 'Sorry, the message could not be sent. Please try again or email me directly.';
      }).then(function () {
        button.disabled = false;
      });
    });
  }
})();
