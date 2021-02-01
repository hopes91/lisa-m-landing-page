const spansToChangeLanguage = document.querySelectorAll('.lang');

const changeLanguage = event => {
  const contactsInRussian = document.querySelector('.personal-text.ru');
  const contactsInItalian = document.querySelector('.personal-text.it');

  if (event.target.id === 'lang-ru') {
    contactsInItalian.style.display = 'none';
    contactsInRussian.style.display = 'inline-block';
  }

  if (event.target.id === 'lang-it') {
    contactsInRussian.style.display = 'none';
    contactsInItalian.style.display = 'inline-block';
  }
};

spansToChangeLanguage.forEach(span => span.addEventListener('click', changeLanguage));
