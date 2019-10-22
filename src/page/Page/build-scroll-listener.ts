/* eslint-disable @typescript-eslint/no-var-requires */
const throttle = require('lodash.throttle');

const bodyTopZeroClassName = 'body--top';
const breakpoint = 100;

const isInView = ({
  top,
  bottom,
  innerHeight = window.innerHeight,
}: PositionProps): boolean => (
  (top >= 0 && top <= innerHeight) ||
  (top <= 0 && bottom >= innerHeight) ||
  (bottom >= 0 && bottom <= innerHeight)
);

function scrollIntoView (id: string, wait: number): () => void {
  let previousScrollY = window.scrollY;
  let previousIsScrollingDown = undefined;

  const callback = (document.getElementById(id).nextSibling
    ? (): void => {

      const { scrollY } = window;
      const isScrollingDown = scrollY > previousScrollY;
      previousScrollY = scrollY;

      if (isScrollingDown !== previousIsScrollingDown) {
        const $element = document.getElementById(id);
        const { top, bottom }: PositionProps = $element.getBoundingClientRect();

        if (isInView({ top, bottom })) {
          if (isScrollingDown) {
            window.scrollTo({
              behavior: 'smooth',
              top: document.body.scrollHeight,
            });
            document.body.classList.remove(bodyTopZeroClassName);
            previousIsScrollingDown = isScrollingDown;
          } else {

            if (bottom >= breakpoint) {
              window.scrollTo({ behavior: 'smooth', top: 0 });
              document.body.classList.add(bodyTopZeroClassName);
              previousIsScrollingDown = false;
            }
          }
        }
      }
    }
    : null
  );

  return throttle(callback, wait, { leading: false });
}

export const buildScrollListener =
  (id: string, wait = 200): () => void => {
    // for $ssr getElementById returns undefined
    if (document.getElementById(id)) {
      return scrollIntoView(id, wait);
    } else {
      const fakeFunction = (): void => {};
      return fakeFunction;
    }
  };

interface PositionProps {
  top: number;
  bottom: number;
  innerHeight?: number;
}
