import { PagesContent } from './types';
import aboutMeTexts from './about-me/';
import contactTexts from './contact/';
import footerTexts from './footer/';
import knowledgeTexts from './knowledge/';
import projectTexts from './project/';
import welcomeTexts from './welcome/';

const getLanguage = (lang: string): Partial<PagesContent> => {
  const [
    aboutMe,
    contact,
    knowledge,
    project,
    footer,
    welcome,
  ] = [
    aboutMeTexts,
    contactTexts,
    knowledgeTexts,
    projectTexts,
    footerTexts,
    welcomeTexts,
  ].map(texts => texts[lang]);

  return {
    aboutMe,
    contact,
    knowledge,
    project,
    footer,
    welcome,
  };
};

const getPageContent = (
  (lang = 'en'): PagesContent => {
    return {
      ...getLanguage(lang),
    } as unknown as PagesContent;
  }
);

export default getPageContent;
