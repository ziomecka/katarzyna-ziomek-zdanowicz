/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { Publisher } from 'publisher-subscriber-pattern';

export let publisher: Publisher;

const publisherScript = (): void => {
  publisher = new Publisher(
    // @ts-ignore
    global.window || window,
    'addEventListener',
    'removeEventListener',
  );
};

publisherScript();

export default publisher;
