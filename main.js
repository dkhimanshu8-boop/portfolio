/* Himanshu Mishra — Senior SEO & Digital Marketing Specialist Portfolio
   Interactive Analytics Charts, Project Filters, Image Fallbacks & Contact Form */

(function () {
  'use strict';

  // ---- 1. Guaranteed Profile Photo & Favicon Fallback ----------------
  var AVATAR_FALLBACK = 'data:image/jpeg;base64,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';

  document.querySelectorAll('img[data-avatar]').forEach(function (img) {
    img.addEventListener('error', function () {
      if (img.src !== AVATAR_FALLBACK) img.src = AVATAR_FALLBACK;
    });
    if (img.complete && img.naturalWidth === 0) {
      img.src = AVATAR_FALLBACK;
    }
  });

  // ---- 2. Mobile Navigation ------------------------------------------
  var toggle = document.querySelector('.nav-toggle');
  var list = document.getElementById('nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    list.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (link && list.classList.contains('open')) {
        list.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- 3. Pharma Now GA4 Interactive Chart ---------------------------
  var ga4Svg = document.getElementById('ga4-line-svg');
  var ga4Tooltip = document.getElementById('ga4-tooltip');
  var legendBtns = document.querySelectorAll('[data-series-filter]');

  if (ga4Svg && legendBtns.length) {
    legendBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-series-filter');
        legendBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        ga4Svg.querySelectorAll('[data-series]').forEach(function (el) {
          var s = el.getAttribute('data-series');
          if (target === 'all' || s === target) {
            el.style.opacity = '1';
          } else {
            el.style.opacity = '0.12';
          }
        });
      });
    });
  }

  // Interactive hover markers on Pharma Now GA4 chart
  var hoverPoints = document.querySelectorAll('.ga4-hover-pt');
  if (hoverPoints.length && ga4Tooltip) {
    hoverPoints.forEach(function (pt) {
      pt.addEventListener('mouseenter', function () {
        var date = pt.getAttribute('data-date');
        var tot = pt.getAttribute('data-total');
        var dir = pt.getAttribute('data-direct');
        var org = pt.getAttribute('data-organic');
        var ai  = pt.getAttribute('data-ai');
        ga4Tooltip.innerHTML =
          '<strong>' + date + '</strong><br>' +
          'Total Users: <b>' + tot + '</b><br>' +
          'Direct: <b>' + dir + '</b> · Organic Search: <b style="color:#4ADE80">' + org + '</b><br>' +
          'AI Assistant + Referral: <b style="color:#C4B5FD">' + ai + '</b>';
        ga4Tooltip.classList.add('visible');
      });
      pt.addEventListener('mousemove', function (e) {
        var rect = ga4Svg.getBoundingClientRect();
        var x = e.clientX - rect.left + 12;
        var y = e.clientY - rect.top - 18;
        if (x > rect.width - 190) x = rect.width - 190;
        if (y < 8) y = 8;
        ga4Tooltip.style.left = x + 'px';
        ga4Tooltip.style.top = y + 'px';
      });
      pt.addEventListener('mouseleave', function () {
        ga4Tooltip.classList.remove('visible');
      });
    });
  }

  // ---- 4. GA4 Raw Screenshot Lightbox Modal --------------------------
  var modal = document.getElementById('ga4-modal');
  var openModalBtns = document.querySelectorAll('[data-open-ga4-modal]');
  var closeModalBtns = document.querySelectorAll('[data-close-ga4-modal]');

  if (modal) {
    openModalBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
      });
    });
    closeModalBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
      });
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // ---- 5. Filterable Client Projects Directory -----------------------
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projCards = document.querySelectorAll('.proj-card');

  if (filterBtns.length && projCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = btn.getAttribute('data-filter');
        filterBtns.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        projCards.forEach(function (card) {
          var cardCats = (card.getAttribute('data-cat') || '').split(' ');
          if (cat === 'all' || cardCats.indexOf(cat) !== -1) {
            card.removeAttribute('hidden');
          } else {
            card.setAttribute('hidden', '');
          }
        });
      });
    });
  }

  // ---- 6. Contact Form -----------------------------------------------
  var form = document.getElementById('contact-form');
  if (form) {
    var status = form.querySelector('.form-status');
    var EMAIL = 'dk.himanshu8@gmail.com';

    function setStatus(msg, kind) {
      status.textContent = msg;
      status.className = 'form-status' + (kind ? ' ' + kind : '');
    }

    function fieldsValid() {
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();
      if (!name || !email || !message) {
        setStatus('Please fill in all three fields.', 'err');
        return null;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setStatus('That email address doesn\u2019t look right.', 'err');
        return null;
      }
      return { name: name, email: email, message: message };
    }

    function mailtoFallback(d) {
      var subject = encodeURIComponent('Portfolio enquiry from ' + d.name);
      var body = encodeURIComponent(d.message + '\n\n\u2014 ' + d.name + ' (' + d.email + ')');
      window.location.href = 'mailto:' + EMAIL + '?subject=' + subject + '&body=' + body;
      setStatus('Opening your mail app with the message filled in.', 'ok');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = fieldsValid();
      if (!d) return;

      var action = form.getAttribute('action') || '';
      if (action.indexOf('YOUR_FORM_ID') !== -1) {
        mailtoFallback(d);
        return;
      }

      setStatus('Sending\u2026');
      fetch(action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (r) {
        if (r.ok) {
          form.reset();
          setStatus('Sent. I usually reply within a day.', 'ok');
        } else {
          mailtoFallback(d);
        }
      }).catch(function () {
        mailtoFallback(d);
      });
    });
  }
})();
