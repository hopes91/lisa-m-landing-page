const title = document.querySelector('header .title');

const manageTitleSize = () => {
  window.innerWidth <= 800 ?
  title.textContent = `С Уважением \r\nк Вашей Истории \r\nи Вашим Финансам`:
  window.innerWidth <= 1366 ?
    title.textContent = `С Уважением \r\nк Вашей Истории и Вашим Финансам`:
    title.textContent = 'С Уважением к Вашей Истории и Вашим Финансам';
};

window.addEventListener('load', manageTitleSize);
window.addEventListener('resize', manageTitleSize);
