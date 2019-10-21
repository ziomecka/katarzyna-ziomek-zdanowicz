import { CreateComponentHelpers } from './types';

const createComponentHelpers: Map<CreateComponentHelpers, unknown> = new Map([
  [
    CreateComponentHelpers.controlBodyScroll,
    import('./helpers/control-body-scroll') as unknown,
  ],
  [
    CreateComponentHelpers.controlBodyClassList,
    import('./helpers/control-body-class-list') as unknown,
  ],
  [
    CreateComponentHelpers.windowEventsPublisher,
    import('./helpers/window-events-publisher') as unknown,
  ],
  [
    CreateComponentHelpers.loopThroughChildren,
    import('./helpers/loop-through-children') as unknown,
  ],
]);

export const getCreateComponentHelper = (
  async (value: CreateComponentHelpers): Promise<unknown> => (
    await createComponentHelpers.get(value)
  )
);
