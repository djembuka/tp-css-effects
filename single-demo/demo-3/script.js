window.addEventListener('load', () => {
  const body = document.querySelector('body');

  document.addEventListener('mousewheel', (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      body.classList.add('animate');
    } else {
      body.classList.remove('animate');
    }
  });
});
