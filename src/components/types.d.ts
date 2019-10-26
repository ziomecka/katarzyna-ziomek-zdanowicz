declare type ClassNames = Record<string, string> & {
  main?: string;
  header?: string;
  footer?: string;
  content?: string;
  heading?: string;
  paper?: string;
  input?: string;
  button?: string;
}

declare type Flex = {
  display?: 'flex' | 'inline-flex';
  justifyContent?: 'center' |
    'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  flexDirection?: 'column' | 'row';
  flexWrap?: 'nowrap' | 'wrap';
}

declare type Target = '_blank' | '';

declare type LinkAttributes = ElementAttributes & {
  target?: Target;
  href: string;
  download?: boolean;
}

declare type ElementAttributes = {
  id?: string;
  title?: string;
  tabIndex?: number;
  autoFocus?: boolean;
  'aria-hidden'?: boolean;
};

type CustomHTMLElementProps = import(
'rendering-recursive-server-side'
).CustomHTMLElementProps

declare type HTMLElementProps = CustomHTMLElementProps & {
  classNames?: ClassNames;
  flex?: Flex;
};

declare type ComponentProps = import('../library/common/').ComponentProps;

declare type ComponentFunction<P = ComponentProps, R = string> =
  import('../library/common/')
  .ComponentFunction<Partial<ComponentProps> & P, R>;

