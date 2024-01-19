import Component from '../core';
import CloseBox from './CloseBox';
import SidebarItem from './SidebarItem';
import { sidebarItems } from './model';

export default class Sidebar extends Component {
  setup() {
    this.state = {
      isOpen: false,
    };

    this.refs = {
      items: [],
    };

    super.setup();
  }

  hydrate() {
    this.refs.interObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 1) return;

          this.refs.items.forEach((item) => {
            const indexClass = item.$target.classList.item(1);
            const [prefix, index] = indexClass.split('__');
            const indexNumber = Number(index) + (entry.isIntersecting ? 1 : -1);

            item.$target.classList.replace(
              indexClass,
              `${prefix}__${indexNumber}`,
            );
          });
        });
      },
      { threshold: 0.5 },
    );

    super.hydrate();
  }

  mounted() {
    const closeBoxProp = {
      isOpen: this.state.isOpen,
      setIsOpen: (nextIsOpen) => {
        this.setState({ isOpen: nextIsOpen });
      },
    };
    this.addChild(CloseBox, '#close-box', closeBoxProp);

    const sidebarItemsProp = {
      isOpen: this.state.isOpen,
    };
    sidebarItems.forEach(({ id }) => {
      const sidebarItem = this.addChild(
        SidebarItem,
        `#${id}`,
        sidebarItemsProp,
      );
      this.refs.interObserver.observe(sidebarItem.$target);
      this.refs.items.push(sidebarItem);
    });
  }
}
