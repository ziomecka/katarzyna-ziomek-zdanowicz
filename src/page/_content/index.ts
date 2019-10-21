import { PagesContent } from './types';
import aboutMeTexts from './about-me/';
import contactTexts from './contact/';
import footerTexts from './footer/';
import knowledgeTexts from './knowledge/';
import projectTexts from './project/';

const getLanguage = (lang: string): Partial<PagesContent> => {
  const [
    aboutMe,
    contact,
    knowledge,
    project,
    footer,
  ] = [
    aboutMeTexts,
    contactTexts,
    knowledgeTexts,
    projectTexts,
    footerTexts,
  ].map(texts => texts[lang]);

  return {
    aboutMe,
    contact,
    knowledge,
    project,
    footer,
  };
};

const welcomeHeading = 'Katarzyna\nZiomek-Zdanowicz';

const getPageContent = (
  (lang = 'en'): PagesContent => {
    return {
      welcome: { heading: welcomeHeading },
      ...getLanguage(lang),
    } as unknown as PagesContent;
  }
);

export default getPageContent;
