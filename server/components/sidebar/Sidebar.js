import Component from '../core';
import CloseBox from './CloseBox';
import SidebarItem from './SidebarItem';
import { sidebarItems } from './model';

export default class Sidebar extends Component {
  interObserver;

  setup() {
    this.state = {
      isOpen: false,
    };

    this.interObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        console.log(entry);
      });
    }, {});

    super.setup();
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
      this.addChild(SidebarItem, `#${id}`, sidebarItemsProp);
    });
  }
}
