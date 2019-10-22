const turnOnBodyScrolling = (): void => {
  document.body.style.overflowY = 'visible';
};

const turnOffBodyScrolling = (): void => {
  document.body.style.overflowY = 'hidden';
};

export default {
  turnOnBodyScrolling,
  turnOffBodyScrolling,
};
