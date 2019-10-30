declare type ClassNames =
  import('render-it-client/types').ClassNames & {
    main?: string;
    header?: string;
    footer?: string;
    content?: string;
    heading?: string;
    paper?: string;
    input?: string;
    button?: string;
  };

declare type LinkAttributes = import(
  'render-it-client/types'
).HTMLAnchorElementAttributes;

type CustomHTMLElementProps = import(
'rendering-recursive-client-side'
).CustomHTMLElementProps;

declare type HTMLElementProps = CustomHTMLElementProps & {
  classNames?: ClassNames;
};

declare type HTMLInputType =
  import('render-it-client/types').HTMLInputType;

type F = import('render-it-client/types').Flex;

declare interface Flex extends F {}

declare type HTMLElementAttributes =
  import('render-it-client/types').HTMLElementAttributes;

declare type HTMLInputElementAttributes =
  import('render-it-client/types').HTMLInputElementAttributes;

declare type HTMLTextareaElementAttributes =
  import('render-it-client/types')
    .HTMLTextareaElementAttributes;

declare type ComponentProps =
  import('render-it-client/types').ComponentProps;


declare type ComponentFunction<P = ComponentProps, R = string> =
  import('render-it-client/types')
  .ComponentFunction<P, R>;

declare const enum Target {
  blank = '_blank',
  self = '_self',
}
