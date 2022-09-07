import model from './user.json';

export const user = model;

export type User = typeof user;
export type Location = typeof user.location;
export type Work = typeof user.work[number];
export type Education = typeof user.education[number];
export type SocialProfiles = typeof user.profiles[number];

export enum WorkPlaces {
  PUBLICIS_SAPIENT = 'publicis-sapient',
  KOLIVING = 'koliving',
  YONKT = 'yonkt',
}

export enum Social {
  LINKEDIN = 'linkedin',
  GITHUB = 'github',
}

export enum Contact {
  EMAIL = 'email',
  PHONE = 'phone',
  LOCATION = 'location',
}
