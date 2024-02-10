import { ROUTE, ROUTE_HASHES, getNextRoute, getPrevRoute } from './routes';

export const HASH_TITLE = {
  [ROUTE.PORTFOLIO]: ['소개', '서버리스', '웹팩'],
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
