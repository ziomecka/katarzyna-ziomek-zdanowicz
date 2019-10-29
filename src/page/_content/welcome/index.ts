import {
  PageContent,
  Translations,
} from '../common.types';

const noScriptPl = require('./no-script-pl.txt').default as string;
const noScriptEn = require('./no-script-en.txt').default as string;

const welcomeHeading = 'Katarzyna\nZiomek-Zdanowicz';

const texts: Translations<WelcomeContent> = {
  pl: {
    heading: welcomeHeading,
    noScript: noScriptPl,
    title: '',
  },
  en: {
    heading: welcomeHeading,
    noScript: noScriptEn,
    title: '',
  },
};

export default texts;

export interface WelcomeContent extends PageContent {
  noScript: string;
}
