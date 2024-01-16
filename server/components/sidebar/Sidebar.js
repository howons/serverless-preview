import Component from '../core';
import CloseBox from './CloseBox';

export default class Sidebar extends Component {
  setup() {
    this.state = {
      isOpen: false,
    };

    super.setup();
  }

  mounted() {
    const closeBoxProps = {
      isOpen: this.state.isOpen,
      setIsOpen: (nextIsOpen) => {
        this.setState({ isOpen: nextIsOpen });
      },
    };
    this.addChild(CloseBox, '#close-box', closeBoxProps);
  }
}
