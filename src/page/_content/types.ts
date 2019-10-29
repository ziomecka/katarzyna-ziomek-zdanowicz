import { AboutMeContent } from './about-me/';
import { ContactContent } from './contact/';
import { FooterContent } from './footer';
import { KnowledgeContent } from './knowledge';
import { PageContent } from './common.types';
import { ProjectContent } from './project';
import { WelcomeContent } from './welcome';

export type PagesContent = {
  aboutMe: AboutMeContent;
  contact: ContactContent;
  footer: FooterContent;
  knowledge: KnowledgeContent;
  project: ProjectContent;
  welcome: WelcomeContent;
}

export {
  AboutMeContent,
  ContactContent,
  FooterContent,
  KnowledgeContent,
  ProjectContent,
  WelcomeContent,
  PageContent,
};
