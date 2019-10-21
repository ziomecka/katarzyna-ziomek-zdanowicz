const className = 'doots';

const Dot: ComponentFunction = (
  () => {
    return createComponent({
      HTMLTag: 'span',
      value: '.',
    });
  }
);

export const Dots: ComponentFunction = (
  () => {
    return createComponent({
      HTMLTag: 'span',
      className,
      children: [
        Dot(),
        Dot(),
        Dot(),
      ],
    });
  }
);
