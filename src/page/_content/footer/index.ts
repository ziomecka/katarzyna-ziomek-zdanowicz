import {
  PageContent,
  Translations,
} from '../common.types';

const contactPl = require('./contact-pl.txt').default as string;
const contactEn = require('./contact-en.txt').default as string;
const cvPl = require('./cv-pl.txt').default as string;
const cvEn = require('./cv-en.txt').default as string;
const projectsPl = require('./projects-pl.txt').default as string;
const projectsEn = require('./projects-en.txt').default as string;
const codedWithLovePl = require('./coded-with-love-pl.txt').default as string;
const codedWithLoveEn = require('./coded-with-love-en.txt').default as string;

const texts: Translations<FooterContent> = {
  pl: {
    heading: '',
    title: '',
    contact: contactPl,
    cv: cvPl,
    projects: projectsPl,
    codedWithLove: codedWithLovePl,
  },
  en: {
    heading: '',
    title: '',
    contact: contactEn,
    cv: cvEn,
    projects: projectsEn,
    codedWithLove: codedWithLoveEn,
  },
};

export default texts;

export interface FooterContent extends PageContent {
  contact: string;
  cv: string;
  projects: string;
  codedWithLove: string;
}
