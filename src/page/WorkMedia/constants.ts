import { WorkMedias } from './types';

const githubHref = 'https://github.com/ziomecka';
const npmHref = 'https://www.npmjs.com/~ziomecka';

export const media = [
  [ require('./icons/github.svg'), githubHref ],
  [ require('./icons/npm.svg'), npmHref ],
] as unknown as [ WorkMedias, string ][];
