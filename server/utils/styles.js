import { ROUTE } from './routes';

export const getStyleTagId = (pathname) => {
  return `#style-${STYLE_SHEET_NAME[pathname]}`;
};

export const getStyleTag = (pathname) => {
  const name = STYLE_SHEET_NAME[pathname];
  return `<link id="style-${name}" rel="stylesheet" href="./src/${name}.css" />`;
};

const STYLE_SHEET_NAME = {
  [ROUTE.INTRO]: 'intro',
  [ROUTE.PROFILE]: 'profile',
  [ROUTE.PROJECT_LIST]: 'project-list',
  [ROUTE.PORTFOLIO]: 'project',
  [ROUTE.ONE_DAY_HERO]: 'project',
  [ROUTE.MUSSEUK]: 'project',
  [ROUTE.VELOG]: 'project',
  [ROUTE.OUTRO]: 'outro',
};
