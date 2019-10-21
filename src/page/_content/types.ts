import { AboutMeContent } from './about-me/';
import { ContactContent } from './contact/';
import { FooterContent } from './footer';
// import { FrontendContent } from './frontend/';
import { KnowledgeContent } from './knowledge';
import { PageContent } from './common.types';
import { ProjectContent } from './project';

export type PagesContent = {
  aboutMe: AboutMeContent;
  contact: ContactContent;
  footer: FooterContent;
  // frontend: FrontendContent;
  knowledge: KnowledgeContent;
  project: ProjectContent;
  welcome: PageContent;
}

export {
  AboutMeContent,
  ContactContent,
  FooterContent,
  // FrontendContent,
  KnowledgeContent,
  ProjectContent,
  PageContent,
};
