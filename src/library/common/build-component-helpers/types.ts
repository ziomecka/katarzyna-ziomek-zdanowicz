export const enum CreateComponentHelpers {
  controlBodyScroll = 'controlBodyScroll',
  controlBodyClassList = 'controlBodyClassList',
  documentEventsPublisher = 'documentEventsPublisher',
  loopThroughChildren = 'loopThroughChildren',
  storeCommonMethods = 'storeCommonMethods',
  windowEventsPublisher = 'windowEventsPublisher',
}

type HelperFunction = (...args: unknown[]) => unknown;

export type Helpers = {
  [CreateComponentHelpers.controlBodyClassList]: HelperFunction;
  [CreateComponentHelpers.controlBodyScroll]: HelperFunction;
  [CreateComponentHelpers.documentEventsPublisher]: HelperFunction;
  [CreateComponentHelpers.loopThroughChildren]: HelperFunction;
  [CreateComponentHelpers.storeCommonMethods]: HelperFunction;
  [CreateComponentHelpers.windowEventsPublisher]: HelperFunction;
};

export {
  LoopThroughChildren,
} from '../build-component-helpers/helpers/loop-through-children';
