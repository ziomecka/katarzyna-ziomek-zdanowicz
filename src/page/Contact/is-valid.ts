export const isValid = (
  (str: string, regexp: string, modifiers = 'gi'): boolean => (
    RegExp(regexp, modifiers).test(str)
  )
);
