/* eslint-disable @typescript-eslint/no-namespace */
export {};

declare global {
  namespace NodeJS {
    export interface Global {
      createComponent({ ...args }: Partial<ComponentProps>): string;
      helpers: import('../library/common/build-component-helpers/types').Helpers;
      window: object;
      document: object;
    }
  }
  function createComponent ({ ...args }: Partial<ComponentProps>): string;
}
