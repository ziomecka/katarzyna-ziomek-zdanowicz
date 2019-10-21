import { Query } from './types';

export const buildUrl = (url, query?: Query): string => {
  return query
    ? Object.keys(query).reduce((url, key, ind) => {
      url += ind !== 0
        ? `&${ key }=${ query[key] }`
        : `?${ key }=${ query[key] }`;

      return url;
    }, url)
    : url;
};
