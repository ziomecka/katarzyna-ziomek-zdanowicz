export type HTMLTag = |
'p' |
'main' |
'div' |
'header' |
'footer' |
'nav' |
'sidebar' |
'custom' |
'form' |
'input' |
'button' |
'img' |
'picture' |
'a';

export type ComponentProps = HTMLElementProps & {
  componentId?: string;
  helpers?: import('./build-component-helpers').Helpers;
}

export type CreateComponent = (props: ComponentProps) => string;

export type ComponentFunction<P = ComponentProps, R = string> =
  (props?: Partial<ComponentProps> & P) => R;

export type ClassNames = Record<string, string>;

export { Helpers, LoopThroughChildren } from './build-component-helpers';
