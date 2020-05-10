const manageTitleSize = () => {
  const title = document.querySelector('header .title');

  window.innerWidth <= 500 ?
    title.textContent = `С уважением\r\nк Вашей истории,\r\nфинансам\r\nи безопасности` :
  window.innerWidth <= 800 ?
    title.textContent = `С уважением\r\nк Вашей истории,\r\nфинансам и безопасности` :
    title.textContent = `С уважением к Вашей истории,\r\nфинансам и безопасности`;
};

window.addEventListener('load', manageTitleSize);
window.addEventListener('resize', manageTitleSize);
