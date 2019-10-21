import { SocialMedias } from './types';

const facebookHref = 'https://www.facebook.com/kasia.ziomek.zdanowicz/';
const linkedinHref =
  'https://pl.linkedin.com/in/katarzynaziomekzdanowicz?trk=profile-badge';
const messengerHref = 'https://m.me/kasia-ziomek-zdanowicz';

export const medias = [
  [ require('./icons/linkedin.svg'), linkedinHref ],
  [ require('./icons/facebook.svg'), facebookHref ],
  [ require('./icons/messenger.svg'), messengerHref ],
] as unknown as [ SocialMedias, string ][];
