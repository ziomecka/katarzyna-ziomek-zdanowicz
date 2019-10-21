/* eslint-disable @typescript-eslint/no-namespace */
export {};

declare global {
  namespace NodeJS {
    export interface Global {
      createComponent({ ...args }: Partial<ComponentProps>): string;
      helpers: import('../library/common/types').Helpers;
      window: object;
      document: object;
    }
  }
  function createComponent ({ ...args }: Partial<ComponentProps>): string;
}
