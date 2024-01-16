const sidebarItems = [
  { id: 'side-intro', name: '인트로', icon: 'H' },
  { id: 'side-profile', name: '프로필', icon: 'P' },
  { id: 'side-project-list', name: '프로젝트 목록', icon: 'L' },
];

export const sidebar = `
  <aside id="sidebar" class="sidebar">
    <div id="close-box" class="close-box">
      <div class="close-box__slash close-box__upper-slash"></div>
      <div class="close-box__slash close-box__middle-slash"></div>
      <div class="close-box__slash close-box__bottom-slash"></div>
    </div>
    ${sidebarItems
      .map(({ id, name, icon }) => `<a id="${id}">${name} ${icon}</a>`)
      .join('')}
  </aside>
`;
