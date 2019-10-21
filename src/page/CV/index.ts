import { Link } from '../../components';

const defaultValue = 'Curriculum Vitae';
const cvClassName = 'cv';

export const CV: ComponentFunction<CVProps> = (
  ({
    style = {},
    flex = {},
    attributes,
    attributes: {
      href,
      dataLabelShort = 'CV',
      dataLabelLong = defaultValue,
    },
    className,
    ...otherProps
  }) => {

    return href ? (
      Link({
        value: dataLabelShort,
        flex,
        style: { textDecoration: 'underline', ...style },
        className: className
          ? `${ className } ${ cvClassName }`
          : cvClassName,
        attributes: {
          download: true,
          'data-label-short': dataLabelShort,
          'data-label-long': dataLabelLong,
          ...attributes,
        },
        ...otherProps,
      })
    ) : null;
  }
);

interface CVProps {
  value?: string;
  attributes: LinkAttributes & {
    dataLabelShort?: string;
    dataLabelLong?: string;
    href: string;
  };
}
