import { ROUTE, ROUTE_HASHES, getNextRoute, getPrevRoute } from './routes';

export const HASH_TITLE = {
  [ROUTE.PORTFOLIO]: ['소개', '서버리스', '웹팩'],
};

export const getNextHash = (pathname, curSlideIndex) => {
  if (curSlideIndex >= ROUTE_HASHES[pathname].length - 1)
    return getNextRoute(pathname);

  return ROUTE_HASHES[pathname][curSlideIndex + 1];
};

export const getPrevHash = (pathname, curSlideIndex) => {
  if (curSlideIndex <= 0) return getPrevRoute(pathname);

  return ROUTE_HASHES[pathname][curSlideIndex - 1];
};

export const getHashIndex = (pathname, slideName) => {
  const name = slideName[0] === '#' ? slideName.slice(1) : slideName;
  return ROUTE_HASHES[pathname].findIndex((hash) => hash === name);
};
