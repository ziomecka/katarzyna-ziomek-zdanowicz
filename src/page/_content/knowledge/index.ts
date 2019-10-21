import {
  PageContent,
  Translations,
} from '../common.types';
import hardList from './hard-list';
import softList from './soft-list';

const headingPl = require('./heading-pl.txt').default as string;
const headingEn = require('./heading-en.txt').default as string;
const titlePl = require('./title-pl.txt').default as string;
const titleEn = require('./title-en.txt').default as string;
const hardContentPl = require('./hard-content-pl.txt').default as string;
const hardContentEn = require('./hard-content-en.txt').default as string;
const softContentPl = require('./soft-content-pl.txt').default as string;
const softContentEn = require('./soft-content-en.txt').default as string;

const texts: Translations<KnowledgeContent> = {
  pl: {
    heading: headingPl,
    title: titlePl,
    hardContent: hardContentPl,
    softContent: softContentPl,
    hardList,
    softList,
  },
  en: {
    heading: headingEn,
    title: titleEn,
    hardContent: hardContentEn,
    softContent: softContentEn,
    softList,
    hardList,
  },
};

export default texts;

export interface KnowledgeContent extends PageContent {
  softContent?: string;
  hardContent?: string;
  hardList?: string[];
  softList?: string[];
}
