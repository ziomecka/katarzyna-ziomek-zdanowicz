declare type ClassNames =
  import('../../../just/devBundle/client/types.js').ClassNames & {
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
  '../../../just/devBundle/client/types.js'
).HTMLAnchorElementAttributes;

type CustomHTMLElementProps = import(
'rendering-recursive-server-side'
).CustomHTMLElementProps;

declare type HTMLElementProps = CustomHTMLElementProps & {
  classNames?: ClassNames;
};

declare type HTMLInputType =
  import('../../../just/devBundle/client/types.js').HTMLInputType;

type F = import('../../../just/devBundle/client/types.js').Flex;

declare interface Flex extends F {}

declare type HTMLElementAttributes =
  import('../../../just/devBundle/client/types.js').HTMLElementAttributes;

declare type HTMLInputElementAttributes =
  import('../../../just/devBundle/client/types.js').HTMLInputElementAttributes;

declare type HTMLTextareaElementAttributes =
  import('../../../just/devBundle/client/types.js')
    .HTMLTextareaElementAttributes;

declare type ComponentProps =
  import('../../../just/devBundle/client/types.js').ComponentProps;


declare type ComponentFunction<P = ComponentProps, R = string> =
  import('../../../just/devBundle/client/types.js')
  .ComponentFunction<P, R>;
