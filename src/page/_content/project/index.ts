import {
  PageContent,
  Translations,
} from '../common.types';
import packagesList from './packages-list';

const headingPl = require('./heading-pl.txt').default as string;
const headingEn = require('./heading-en.txt').default as string;
const titlePl = require('./title-pl.txt').default as string;
const titleEn = require('./title-en.txt').default as string;
const contentOnePl = require('./content-1-pl.txt').default as string;
const contentOneEn = require('./content-1-en.txt').default as string;
const contentTwoPl = require('./content-2-pl.txt').default as string;
const contentTwoEn = require('./content-2-en.txt').default as string;

const texts: Translations<ProjectContent> = {
  pl: {
    content: '',
    contentOne: contentOnePl,
    contentTwo: contentTwoPl,
    packagesList,
    heading: headingPl,
    title: titlePl,
  },
  en: {
    content: '',
    contentOne: contentOneEn,
    contentTwo: contentTwoEn,
    packagesList,
    heading: headingEn,
    title: titleEn,
  },
};

export default texts;

export interface ProjectContent extends PageContent {
  contentOne: string;
  contentTwo: string;
  packagesList: string[][];
}
