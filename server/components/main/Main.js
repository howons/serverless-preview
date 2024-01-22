import Component from '../core';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';

const mainHtmlCache = {};

export default class Main extends Component {
  setup() {
    this.state = {
      curPathname: window.location.pathname,
    };

    this.refs = {
      mouseX: 0,
      scrollCounter: 0,
      height: 0,
    };

    super.setup();
  }

  hydrate() {
    mainHtmlCache[this.state.curPathname] = this.$target.innerHTML;

    this.restrictAndCountScroll();

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

  restrictAndCountScroll() {
    this.$target.addEventListener('mousemove', (e) => {
      this.refs.mouseX = e.clientX;
    });

    const countOverScroll = (e) => {
      let lastTouchClientY = 0;

      return (e) => {
        const deltaY = e.deltaY ?? e.touches[0].clientY - lastTouchClientY;
        lastTouchClientY = e.touches ? e.touches[0].clientY : lastTouchClientY;

        const isTop = e.currentTarget.scrollTop === 0;
        const isBottom =
          e.currentTarget.scrollHeight <=
          Math.ceil(e.currentTarget.scrollTop + e.currentTarget.clientHeight);
        console.log(deltaY, isTop, isBottom);
      };
    };

    this.$target.addEventListener('wheel', countOverScroll());
    this.$target.addEventListener('touchmove', countOverScroll());
  }
}
