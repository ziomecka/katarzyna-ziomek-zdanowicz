export const buildStyle = (style, flex: Flex): Record<string, string> => {
  return flex
    ? { ...style, display: 'flex', ...flex }
    : style;
};
