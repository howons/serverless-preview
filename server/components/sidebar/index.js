import { sidebarItems } from '../../models/sideItems';

export const sidebar = `
  <aside class="sidebar">
    ${sidebarItems.map(({ name, icon }) => `<a>${name} ${icon}</a>`).join('')}
  </aside>
`;
