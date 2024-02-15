export const ID = {
  APP: '#app',
  MAIN: '#main',
  SIDEBAR: '#sidebar',
  SIDEBAR_INNER: '#sidebar__inner',
  CLOSE_BOX: '#close-box',
  SCROLL_INDICATOR: '#scroll-indicator',
  SCROLL_INDICATOR_HORIZON: '#scroll-indicator--horizon',
  SLIDE_BAR: '#slide-bar',
};

export const pathnameToId = (pathname) => {
  return `#${pathname.slice(1)}`;
};
