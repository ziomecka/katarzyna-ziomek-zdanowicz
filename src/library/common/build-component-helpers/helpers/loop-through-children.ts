export const loopThroughChildren = ({
  children,
  callback,
  breakOnTruthy = true,
}: LoopThroughChildrenProps): unknown => {
  const childrenArray = Array.from(children);
  let result;

  if (breakOnTruthy) {
    for (let i = 0; i < childrenArray.length; i++) {
      result = callback(childrenArray[i]);
      if(result) break;
    }
  } else {
    for (let i = 0; i < childrenArray.length; i++) {
      callback(childrenArray[i]);
    }
  }

  return result;
};

export default loopThroughChildren;

interface LoopThroughChildrenProps {
  children: HTMLCollection;
  callback(child: Element): unknown;
  breakOnTruthy?: boolean;
}

export type LoopThroughChildren = (props: LoopThroughChildrenProps) => unknown;
