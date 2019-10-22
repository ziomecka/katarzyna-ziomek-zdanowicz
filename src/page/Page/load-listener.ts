export const loadListener = (): void => {
  window.addEventListener('load', () => {
    window.scrollTo(0, 0);

    document.addEventListener(
      'touchmove',
      (event): void => {
        event.preventDefault();
        const { documentElement } = document;
        if (documentElement.requestFullscreen) {
          documentElement.requestFullscreen();
        }
      }
    );
  });
};
