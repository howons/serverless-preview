export const ROUTE = {
  INTRO: '/intro',
  PROFILE: '/profile',
  PROJECT_LIST: '/project-list',
  PORTFOLIO: '/portfolio',
  ONE_DAY_HERO: '/one-day-hero',
  MUSSEUK: '/musseuk-letter',
  VELOG: '/velog',
};

export const ROUTES_LIST = [
  ROUTE.INTRO,
  ROUTE.PROFILE,
  ROUTE.PROJECT_LIST,
  ROUTE.PORTFOLIO,
  ROUTE.ONE_DAY_HERO,
  ROUTE.MUSSEUK,
  ROUTE.VELOG,
];

export const ROUTE_TITLE = {
  [ROUTE.INTRO]: '신호원 포트폴리오',
  [ROUTE.PROFILE]: '프로필',
  [ROUTE.PROJECT_LIST]: '프로젝트 목록',
  [ROUTE.PORTFOLIO]: '프로젝트-포트폴리오',
  [ROUTE.ONE_DAY_HERO]: '프로젝트-원데이히어로',
  [ROUTE.MUSSEUK]: '프로젝트-머쓱레터',
  [ROUTE.VELOG]: '프로젝트-벨로그클로닝',
};

export const ROUTE_HASHES = {
  [ROUTE.PORTFOLIO]: ['intro', 'serverless', 'webpack'],
  [ROUTE.ONE_DAY_HERO]: ['intro', 'nextjs', 'chat', 'fetch'],
  [ROUTE.MUSSEUK]: ['intro', 'figma', 'chakra-ui', 'tanstack'],
  [ROUTE.VELOG]: ['intro', 'editor', 'post', 'aws'],
};

export const getNextRoute = (pathname) => {
  const curIndex = findPathIndex(pathname);
  if (curIndex < 0 || curIndex >= ROUTES_LIST.length - 1) return;

  return ROUTES_LIST[curIndex + 1];
};

export const getPrevRoute = (pathname) => {
  const curIndex = findPathIndex(pathname);
  if (curIndex <= 0) return;

  return ROUTES_LIST[curIndex - 1];
};

export const checkIsBeforeOrAfter = (curPathname, targetPathname) => {
  const curIndex = findPathIndex(curPathname);
  const targetIndex = findPathIndex(targetPathname);

  return {
    isBefore: targetIndex - curIndex < 0,
    ifAfter: targetIndex - curIndex > 0,
  };
};

export const getUrl = (pathname, hash) => {
  const hashUrl = hash ? (hash[0] === '#' ? hash : `#${hash}`) : '';
  return `${window.location.protocol}//${window.location.host}/dev${pathname}${hashUrl}`;
};

export const getWindowPathname = () => {
  const path = window.location.pathname;
  return path.includes('/dev') ? path.slice(4) : path;
};

export const setWindowPathname = (pathname, hash, shouldPush) => {
  document.title = ROUTE_TITLE[pathname];

  const hashName =
    hash || (Object.keys(ROUTE_HASHES).includes(pathname) ? '#intro' : '');

  if (shouldPush) {
    history.pushState({}, '', getUrl(pathname, hashName));
  } else {
    history.replaceState({}, '', getUrl(pathname, hashName));
  }
};

export const findPathIndex = (pathname) => {
  return ROUTES_LIST.findIndex(
    (route) => route === pathname || route === pathname.split('/dev')?.[1],
  );
};
