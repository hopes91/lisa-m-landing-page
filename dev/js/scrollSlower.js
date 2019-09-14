const anchorElements = document.querySelectorAll('[href^="#"]');

function scrollSlower(event) {
  event.preventDefault();

  const speed = 0.3;
  const offsetY = window.pageYOffset;
  const hash = this.href.replace(/[^#]*(.*)/, '$1');
  const topIndent = document.querySelector(hash).getBoundingClientRect().top;
  let start = null;

  requestAnimationFrame(step);

  function step(time) {
    if (start === null) {
      start = time;
    }

    const progress = time - start;
    let scroll = null;

    topIndent < 0 ?
      scroll = Math.max(offsetY - progress/speed, offsetY + topIndent) :
      scroll = Math.min(offsetY + progress/speed, offsetY + topIndent);

    window.scrollTo(0, scroll);

    scroll !== offsetY + topIndent ?
      requestAnimationFrame(step) :
      location.hash = hash;
  }
}

anchorElements.forEach(anchorElement => anchorElement.addEventListener('click', scrollSlower));
