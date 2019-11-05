import { PageContent } from './types';

export type PageContentMySQL = { [ P in keyof PageContent ]: P };
