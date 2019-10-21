import { Page } from './page/';
import { classNames } from './classNames';
import { default as globalCreateComponent } from './createComponent/server';

export default globalCreateComponent({ classNames })
  .then(({ helpers }) => (): string => Page({ classNames, helpers }));
