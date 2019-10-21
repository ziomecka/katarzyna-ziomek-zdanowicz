import {
  PageContent,
  Translations,
} from '../common.types';

const headingPl = require('./heading-pl.txt').default as string;
const headingEn = require('./heading-en.txt').default as string;
const titlePl = require('./title-pl.txt').default as string;
const titleEn = require('./title-en.txt').default as string;
const contentPl = require('./content-pl.txt').default as string;
const contentEn = require('./content-en.txt').default as string;

const texts: Translations<ProjectContent> = {
  pl: {
    content: contentPl,
    heading: headingPl,
    title: titlePl,
  },
  en: {
    content: contentEn,
    heading: headingEn,
    title: titleEn,
  },
};

export default texts;

export interface ProjectContent extends PageContent {}
