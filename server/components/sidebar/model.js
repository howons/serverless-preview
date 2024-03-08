import { SVG } from '../../utils/images';

export const sidebarItems = [
  { id: 'side-intro', name: '인트로', icon: SVG.INTRO, path: '/intro' },
  { id: 'side-profile', name: '프로필', icon: SVG.PROFILE, path: '/profile' },
  {
    id: 'side-project-list',
    name: '프로젝트 목록',
    icon: SVG.LIST,
    path: '/project-list',
  },
  {
    id: 'side-project-portfolio',
    name: '포트폴리오',
    icon: SVG.PORTFOLIO,
    path: '/portfolio',
  },
  {
    id: 'side-project-onedayhero',
    name: '원데이 히어로',
    icon: SVG.ONE_DAY_HERO,
    path: '/one-day-hero',
  },
  {
    id: 'side-project-musseuk-letter',
    name: '머쓱 레터',
    icon: SVG.MUSSEUK,
    path: '/musseuk-letter',
  },
  {
    id: 'side-project-7elog',
    name: 'Velog 클로닝',
    icon: SVG.VELOG,
    path: '/velog',
  },
  {
    id: 'side-outro',
    name: '더보기',
    icon: SVG.OUTRO,
    path: '/outro',
  },
];

export const sidebar = `
  <aside id="sidebar" class="sidebar">
    <div id="close-box" class="close-box">
      <div class="close-box__slash close-box__upper-slash"></div>
      <div class="close-box__slash close-box__middle-slash"></div>
      <div class="close-box__slash close-box__bottom-slash"></div>
    </div>
    <div id="sidebar__inner" class="sidebar__inner">
      ${sidebarItems
        .map(
          ({ id, name, icon }, index) =>
            `<div 
              id="${id}" 
              class="sidebar-item sidebar-item__${index}" 
              data-index="${index}">
                <a id="${id}__link">
                  ${name} ${icon ?? ''}
                </a>
            </div>`,
        )
        .join('')}
      <div class="sidebar__scroll-helper"></div>
    </div>
  </aside>
`;
