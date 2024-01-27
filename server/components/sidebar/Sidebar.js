import { ID } from '../../utils/ids';
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
      innerRef: this.$target.querySelector(ID.SIDEBAR_INNER),
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
        root: this.refs.innerRef,
        rootMargin: '0px 500px 0px 500px',
      },
    );

    super.hydrate();
  }

  render() {
    this.refs.innerRef.classList.toggle('open', this.state.isOpen);

    super.render();
  }

  mounted() {
    const closeBoxProp = {
      isOpen: this.state.isOpen,
      setIsOpen: (nextIsOpen) => {
        this.setState({ isOpen: nextIsOpen });
      },
      firstItemRef: null,
      activeItemRef: null,
    };

    const sidebarItemsProp = {
      isOpen: this.state.isOpen,
      isActive: false,
      pathname: '',
      loadPageData: this.props.loadPageData,
    };
    this.refs.items = [];

    sidebarItems.forEach(({ id, path }, index) => {
      sidebarItemsProp.isActive = this.props.curPathname === path;
      sidebarItemsProp.pathname = path;

      const sidebarItem = this.addChild(
        SidebarItem,
        `#${id}`,
        sidebarItemsProp,
      );

      this.refs.io.observe(sidebarItem.$target);
      this.refs.items.push(sidebarItem);

      if (index === 0) closeBoxProp.firstItemRef = sidebarItem;
      if (sidebarItemsProp.isActive) closeBoxProp.activeItemRef = sidebarItem;
    });

    this.addChild(CloseBox, ID.CLOSE_BOX, closeBoxProp);
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
