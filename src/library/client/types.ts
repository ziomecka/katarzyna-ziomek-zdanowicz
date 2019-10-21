export type ComponentFunction<P = HTMLElementProps> =
  (props?: Partial<HTMLElementProps> & P) => HTMLCollection;
