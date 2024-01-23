export const ROUTES = [
  '/intro',
  '/profile',
  '/project-list',
  '/portfolio',
  '/one-day-hero',
  '/musseuk-letter',
  '/7elog',
];

export const getNextRoute = (pathname) => {
  const curIndex = findPathIndex(pathname);
  if (curIndex < 0 || curIndex >= ROUTES.length - 1) return;

  return ROUTES[curIndex + 1];
};

export const getPrevRoute = (pathname) => {
  const curIndex = findPathIndex(pathname);
  if (curIndex <= 0) return;

  return ROUTES[curIndex - 1];
};

export const checkIsBeforeOrAfter = (curPathname, targetPathname) => {
  const curIndex = findPathIndex(curPathname);
  const targetIndex = findPathIndex(targetPathname);

  return {
    isBefore: targetIndex - curIndex < 0,
    ifAfter: targetIndex - curIndex > 0,
  };
};

export const getUrl = (pathname) => {
  return `${window.location.protocol}//${window.location.host}/dev${pathname}`;
};

const findPathIndex = (pathname) => {
  return ROUTES.findIndex(
    (route) => route === pathname || route === pathname.split('/dev')?.[1],
  );
};
