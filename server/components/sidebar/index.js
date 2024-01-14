import { sidebarItems } from '../../models/sideItems';

export const sidebar = `
  <aside class="sidebar">
    <div class="close-box">
      <div class="close-box__slash close-box__upper-slash"></div>
      <div class="close-box__slash close-box__middle-slash"></div>
      <div class="close-box__slash close-box__bottom-slash"></div>
    </div>
    ${sidebarItems.map(({ name, icon }) => `<a>${name} ${icon}</a>`).join('')}
  </aside>
`;
