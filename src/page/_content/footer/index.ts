import {
  PageContent,
  Translations,
} from '../common.types';
import { author } from '../../_constants';

const headingPl = require('./heading-pl.txt').default as string;
const headingEn = require('./heading-en.txt').default as string;
const contactPl = require('./contact-pl.txt').default as string;
const contactEn = require('./contact-en.txt').default as string;
const cvPl = require('./cv-pl.txt').default as string;
const cvEn = require('./cv-en.txt').default as string;
const projectsPl = require('./projects-pl.txt').default as string;
const projectsEn = require('./projects-en.txt').default as string;

const texts: Translations<FooterContent> = {
  pl: {
    heading: `${ headingPl }\n${ author }`,
    title: '',
    contact: contactPl,
    cv: cvPl,
    projects: projectsPl,
  },
  en: {
    heading: `${ headingEn } <span>${ author }</span>`,
    title: '',
    contact: contactEn,
    cv: cvEn,
    projects: projectsEn,
  },
};

export default texts;

export interface FooterContent extends PageContent {
  contact: string;
  cv: string;
  projects: string;
}
