export const sidebarItems = [
  { id: 'side-intro', name: '인트로', icon: 'H', path: '/intro' },
  { id: 'side-profile', name: '프로필', icon: 'P', path: '/profile' },
  {
    id: 'side-project-list',
    name: '프로젝트 목록',
    icon: 'L',
    path: '/project-list',
  },
  {
    id: 'side-project-portfolio',
    name: '포트폴리오',
    icon: 'F',
    path: '/portfolio',
  },
  {
    id: 'side-portfolio-intro',
    name: '포트폴리오-소개',
    path: '/portfolio',
    hash: '#intro',
  },
  {
    id: 'side-project-onedayhero',
    name: '원데이히어로',
    icon: 'O',
    path: '/one-day-hero',
  },
  {
    id: 'side-project-musseuk-letter',
    name: '머쓱레터',
    icon: 'M',
    path: '/musseuk-letter',
  },
  { id: 'side-project-7elog', name: 'velog 클로닝', icon: 'V', path: '/7elog' },
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
