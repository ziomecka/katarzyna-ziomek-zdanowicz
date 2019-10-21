import {
  PageContent,
  Translations,
} from '../common.types';

const titlePl = require('./title-pl.txt').default as string;
const titleEn = require('./title-en.txt').default as string;

const formHeadingPl = require('./form-heading-pl.txt').default as string;
const formHeadingEn = require('./form-heading-en.txt').default as string;
const farewellPl = require('./farewell-pl.txt').default as string;
const farewellEn = require('./farewell-en.txt').default as string;
const nameLabelPl = require('./name-label-pl.txt').default as string;
const nameLabelEn = require('./name-label-en.txt').default as string;
const emailLabelPl = require('./email-label-pl.txt').default as string;
const emailLabelEn = require('./email-label-en.txt').default as string;
const formButtonPl = require('./form-button-pl.txt').default as string;
const formButtonEn = require('./form-button-en.txt').default as string;

const texts: Translations<ContactContent> = {
  pl: {
    heading: formHeadingPl,
    title: titlePl,
    farewellHeading: farewellPl,
    formButton: formButtonPl,
    nameLabel: nameLabelPl,
    emailLabel: emailLabelPl,
  },
  en: {
    heading: formHeadingEn,
    title: titleEn,
    farewellHeading: farewellEn,
    formButton: formButtonEn,
    nameLabel: nameLabelEn,
    emailLabel: emailLabelEn,
  },
};

export default texts;

export interface ContactContent extends PageContent {
  farewellHeading?: string;
  formButton: string;
  nameLabel: string;
  emailLabel: string;
}
