const addClass = (value: string): void => {
  document.body.classList.add(value);
};

const removeClass = (value: string): void => {
  document.body.classList.remove(value);
};

export default {
  addClass,
  removeClass,
};
