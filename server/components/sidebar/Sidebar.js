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
      innerRef: this.$target.querySelector('#sidebar__inner'),
      mouseX: 0,
      mainRef: document.querySelector('#main'),
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

    this.restrictScrollAreaWhenClosed();

    super.hydrate();
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
    };
    this.refs.items = [];

    sidebarItems.forEach(({ id, path }, index) => {
      sidebarItemsProp.isActive = window.location.pathname.includes(path);

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

    this.addChild(CloseBox, '#close-box', closeBoxProp);
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

  restrictScrollAreaWhenClosed() {
    this.refs.innerRef.addEventListener('mousemove', (e) => {
      this.refs.mouseX = e.clientX;
    });
    this.refs.innerRef.addEventListener('touchstart', (e) => {
      this.refs.mouseX = e.touches[0].clientX;
      console.log(e.touches[0].clientX);
    });

    const handleWheel = (e) => {
      let lastTouchClientY = 0;

      return (e) => {
        if (this.refs.mouseX <= 50 || this.state.isOpen) return;

        e.preventDefault();

        const deltaY = e.deltaY ?? lastTouchClientY - e.touches[0].clientY;
        lastTouchClientY = e.touches ? e.touches[0].clientY : lastTouchClientY;

        if (e.touches) {
          this.refs.mainRef.scrollTop += deltaY;
        } else {
          this.refs.mainRef.scrollBy({
            top: deltaY / 3,
            behavior: 'smooth',
          });
        }
      };
    };

    this.refs.innerRef.addEventListener('wheel', handleWheel());
    this.refs.innerRef.addEventListener('touchmove', handleWheel());
  }
}
