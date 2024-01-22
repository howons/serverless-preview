import Component from '../core';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';

const mainHtmlCache = {};

export default class Main extends Component {
  setup() {
    this.state = {
      curPathname: window.location.pathname,
    };

    super.setup();
  }

  hydrate() {
    mainHtmlCache[this.state.curPathname] = this.$target.innerHTML;

    super.hydrate();
  }

  render() {
    super.render();
  }

  mounted() {
    const scrollIndicatorProp = {};
    this.addChild(ScrollIndicator, '#scroll-indicator', scrollIndicatorProp);

    super.mounted();
  }
}
