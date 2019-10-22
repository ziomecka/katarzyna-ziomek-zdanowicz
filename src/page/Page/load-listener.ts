export const loadListener = (): void => {
  window.scrollTo(0, 0);

  document.addEventListener(
    'touchmove',
    (event): void => {
      event.preventDefault();
      const documentElement
        = document.documentElement as unknown as DocumentElement;
      if (documentElement.requestFullscreen) {
        documentElement.requestFullscreen();
      } else if (documentElement.webkitrequestFullscreen) {
        documentElement.webkitrequestFullscreen();
      } else if (documentElement.mozrequestFullscreen) {
        documentElement.mozrequestFullscreen();
      } else if (documentElement.msrequestFullscreen) {
        documentElement.msrequestFullscreen();
      }
    }
  );
};

type DocumentElement = {
  requestFullscreen(): void;
  webkitrequestFullscreen(): void;
  mozrequestFullscreen(): void;
  msrequestFullscreen(): void;
};
