const showCurrentYear = () => {
  const currentYear = document.querySelector('.current-year');

  currentYear.textContent = new Date().getFullYear();
}

window.addEventListener('load', showCurrentYear)
