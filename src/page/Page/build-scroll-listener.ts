/* eslint-disable @typescript-eslint/no-var-requires */
const throttle = require('lodash.throttle');

const bodyTopZeroClassName = 'body--top';

const isInView = ({
  top,
  bottom,
  innerHeight = window.innerHeight,
}: PositionProps): boolean => (
  (top >= 0 && top <= innerHeight) ||
  (top <= 0 && bottom >= innerHeight) ||
  (bottom >= 0 && bottom <= innerHeight)
);

function scrollIntoView (wait: number): () => void {
  let previousScrollY = window.scrollY;
  let previousIsScrollingDown = undefined;

  const callback = (this.nextSibling
    ? (): void => {

      const { scrollY } = window;
      const isScrollingDown = scrollY > previousScrollY;
      previousScrollY = scrollY;

      if (isScrollingDown !== previousIsScrollingDown) {
        const { top, bottom }: PositionProps = this.getBoundingClientRect();

        if (isInView({ top, bottom })) {
          if (isScrollingDown) {
            window.scrollBy({ behavior: 'smooth', top: window.innerHeight });
            document.body.classList.remove(bodyTopZeroClassName);
          } else {
            window.scrollTo({ behavior: 'smooth', top: 0 });
            document.body.classList.add(bodyTopZeroClassName);
          }
          previousIsScrollingDown = isScrollingDown;
        }
      }
    }
    : null
  );

  return throttle(callback, wait, { leading: false });
}

export const buildScrollListener =
  ($element: HTMLElement, wait = 200): () => void => {
    // for $ssr $element is undefined
    if ($element) {
      return scrollIntoView.bind($element)(wait);
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
