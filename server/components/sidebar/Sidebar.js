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
      io: null,
    };

    super.setup();
  }

  hydrate() {
    this.refs.io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.boundingClientRect.y >= 10) return;

          this.reorderItemsClass(entry);
        });
      },
      {
        threshold: 0.5,
        root: this.$target.querySelector('#sidebar__inner'),
        rootMargin: '0px 500px 0px 500px',
      },
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
      itemPathname: '',
    };
    this.refs.items = [];

    sidebarItems.forEach(({ id, path }) => {
      sidebarItemsProp.itemPathname = path;
      const sidebarItem = this.addChild(
        SidebarItem,
        `#${id}`,
        sidebarItemsProp,
      );

      this.refs.io.observe(sidebarItem.$target);
      this.refs.items.push(sidebarItem);
    });
  }

  reorderItemsClass(entry) {
    const targetIndex = Number(entry.target.dataset.index);

    this.refs.items.forEach((item, index) => {
      const indexClass = item.$target.classList.item(1);
      const [prefix, _] = indexClass.split('__');

      const newIndex = index - targetIndex - (entry.isIntersecting ? 0 : 1);
      item.$target.classList.replace(indexClass, `${prefix}__${newIndex}`);
    });
  }
}
