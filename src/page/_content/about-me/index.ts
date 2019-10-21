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
const iconTitlePl = require('./icon-title-pl.txt').default as string;
const iconTitleEn = require('./icon-title-en.txt').default as string;

const texts: Translations<AboutMeContent> = {
  pl: {
    heading: headingPl,
    title: titlePl,
    content: contentPl,
    iconLink: iconTitlePl,
  },
  en: {
    heading: headingEn,
    title: titleEn,
    content: contentEn,
    iconLink: iconTitleEn,
  },
};

export default texts;

export interface AboutMeContent extends PageContent {
  iconLink: string;
}
