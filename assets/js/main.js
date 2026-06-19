(function () {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-navigation');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', function () {
      const isOpen = navigation.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    navigation.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const year = document.querySelector('#year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');

  if (form && status) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = new FormData(form);
      const name = String(formData.get('name') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const audience = String(formData.get('audience') || '').trim();
      const message = String(formData.get('message') || '').trim();

      if (!name || !email || !audience || !message) {
        status.textContent = 'Please complete all fields.';
        return;
      }

      const subject = encodeURIComponent('ICT consultancy enquiry from ' + name);
      const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Audience: ' + audience + '\n\n' +
        'Message:\n' + message
      );

      window.location.href = 'mailto:hello@activ-it.co.uk?subject=' + subject + '&body=' + body;
      status.textContent = 'Your email client should open with a draft enquiry.';
    });
  }
}());
