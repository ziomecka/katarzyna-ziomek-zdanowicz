const turnOnBodyScrolling = (): void => {
  document.body.style.paddingRight = '0';
  document.body.style.overflowY = 'visible';
};

const turnOffBodyScrolling = (): void => {
  const { body } = document;
  // paddingRight of body is set to scrollBar width
  body.style.paddingRight = (innerWidth - body.offsetWidth).toString();
  body.style.overflowY = 'hidden';
};


export default {
  turnOnBodyScrolling,
  turnOffBodyScrolling,
};
