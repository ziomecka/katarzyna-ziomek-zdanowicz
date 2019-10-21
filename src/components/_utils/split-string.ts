export const splitString = (str: string, sign = '\n'): string[] => {
  return str.split(new RegExp(sign, 'gi'));
};
