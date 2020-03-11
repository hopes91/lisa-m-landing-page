const scrollSlower = require('./slowerScrolling.js');

const infoSectionTitles = document.querySelectorAll('.info-header .info-section-title');

const manageSectionHREF = () => {
  window.innerWidth <= 950 ?
    infoSectionTitles.forEach((section, index) => {
      switch (index) {
        case 0:
          section.setAttribute('href', '#info-investment');
          break;
        case 1:
          section.setAttribute('href', '#info-revenue');
          break;
        case 2:
          section.setAttribute('href', '#info-safety');
          break;
      }
    }) :
    infoSectionTitles.forEach(section => section.removeAttribute('href'));
};

const checkForWindowWidth = event => {
  window.innerWidth <= 950 &&
    scrollSlower(event);
};

window.addEventListener('load', manageSectionHREF);
window.addEventListener('resize', manageSectionHREF);
infoSectionTitles.forEach(section => section.addEventListener('click', checkForWindowWidth));
