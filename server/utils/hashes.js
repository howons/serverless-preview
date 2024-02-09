import { ROUTE, getNextRoute, getPrevRoute } from './routes';

export const ROUTE_HASHES = {
  [ROUTE.PORTFOLIO]: ['intro', 'serverless'],
  [ROUTE.ONE_DAY_HERO]: [],
  [ROUTE.MUSSEUK]: [],
  [ROUTE.VELOG]: [],
};

export const getNextHash = (pathname, curPageNum) => {
  if (curPageNum < 0 || curPageNum >= ROUTE_HASHES.length - 1)
    return getNextRoute(pathname);

  return ROUTE_HASHES[pathname][curPageNum + 1];
};

export const getPrevHash = (pathname, curPageNum) => {
  if (curPageNum <= 0) return getPrevRoute(pathname);

  return ROUTE_HASHES[pathname][curPageNum - 1];
};

export const getHashIndex = (pathname, slideName) => {
  const name = slideName[0] === '#' ? slideName.slice(1) : slideName;
  return ROUTE_HASHES[pathname].findIndex((hash) => hash === name);
};
