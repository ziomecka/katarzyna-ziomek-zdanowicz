export const componentDidMountQueue = [];

export const enqueueScript = (componentScript: () => void): void => {
  componentDidMountQueue.push(componentScript);
};
