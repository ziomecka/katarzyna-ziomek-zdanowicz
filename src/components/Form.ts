const fakeFunction = (): void => {};

export const Form: ComponentFunction<FormProps> = (
  ({
    Component = undefined,
    ComponentProps = {},
    FormComponents,
    eventHandlers: receivedEventHandlers,
    eventHandlers: {
      onSubmit = fakeFunction,
    },
    ...otherProps
  } = { eventHandlers: {}, FormComponents: [] }) => {

    const eventHandlers = Object.assign(receivedEventHandlers, {
      onSubmit: (event: Event): void => {
        event.preventDefault();
        onSubmit(event);
      },
    });

    const component = Component
      ? Component({
        ...ComponentProps,
        children: FormComponents,
        eventHandlers,
        ...otherProps,
      })
      : createComponent({
        componentId: 'form',
        HTMLTag: 'form',
        children: FormComponents,
        eventHandlers,
        ...otherProps,
      });

    return component;
  }
);

interface FormProps {
  Component?: ComponentFunction;
  ComponentProps?: HTMLElementProps;
  FormComponents: (string)[];
}
