/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { Publisher } from 'publisher-subscriber-pattern';

export let publisher: Publisher;

const publisherScript = (): void => {
  publisher = new Publisher(
    // @ts-ignore
    global.window.document || window.document,
    'addEventListener',
    'removeEventListener',
  );
};

publisherScript();

export default publisher;
