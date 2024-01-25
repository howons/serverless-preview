import { ID } from '../../utils/ids';
import { getNextRoute, getPrevRoute } from '../../utils/routes';
import Component from '../core';

const SCROLL_MAX = 800;
const SCROLL_LEVEL_MAX = Math.round(SCROLL_MAX / 100);

export default class ScrollIndicator extends Component {
  setup() {
    this.state = {
      scrollLevel: 0,
    };

    this.refs = {
      mouseX: 0,
      scrollCounter: 0,
      scrollLevelLock: false,
      scrollTimer: null,
      scrollInterval: null,
    };

    super.setup();
  }

  hydrate() {
    this.addScrollCountEvent();

    super.hydrate();
  }

  render() {
    Array.from({ length: SCROLL_LEVEL_MAX + 1 })
      .map((_, index) => index)
      .forEach((num) => {
        this.$target.classList.toggle(
          `scroll-indicator--level${num}`,
          this.state.scrollLevel === num,
        );
        if (num > 0) {
          this.$target.classList.toggle(
            `scroll-indicator--level${-num}`,
            this.state.scrollLevel === -num,
          );
        }
      });

    const nextTriggered = this.state.scrollLevel >= SCROLL_LEVEL_MAX;
    const prevTriggered = this.state.scrollLevel <= -SCROLL_LEVEL_MAX;

    if (nextTriggered || prevTriggered) {
      const targetPathname = nextTriggered
        ? getNextRoute(this.props.curPathname)
        : getPrevRoute(this.props.curPathname);

      if (targetPathname) {
        this.refs.scrollLevelLock = true;

        this.setState({
          scrollLevel: this.state.scrollLevel + (nextTriggered ? -1 : 1),
        });

        this.props.loadPageData(targetPathname).then(() => {
          clearTimeout(this.refs.scrollTimer);
          clearInterval(this.refs.scrollInterval);
          this.refs.scrollCounter = 0;

          setTimeout(() => {
            this.refs.scrollLevelLock = false;
            this.setState({ scrollLevel: 0 });
          }, 100);
        });
      }
    }

    super.render();
  }

  addScrollCountEvent() {
    this.addEvent('mousemove', ID.MAIN, (e) => {
      this.refs.mouseX = e.clientX;
    });

    const countOverScroll = (e) => {
      let lastTouchClientY = 0;

      return (e) => {
        const deltaY =
          e.deltaY ?? 5 * (lastTouchClientY - e.touches[0].clientY);
        lastTouchClientY = e.touches ? e.touches[0].clientY : lastTouchClientY;

        if (e.touches && (deltaY > 300 || deltaY < -300)) return;

        const isTop = e.currentTarget.scrollTop === 0;
        const isBottom =
          e.currentTarget.scrollHeight <=
          Math.ceil(e.currentTarget.scrollTop + e.currentTarget.clientHeight);

        if ((isTop && deltaY < 0) || (isBottom && deltaY > 0)) {
          this.refs.scrollCounter += deltaY;

          if (this.refs.scrollCounter > SCROLL_MAX)
            this.refs.scrollCounter = SCROLL_MAX;
          if (this.refs.scrollCounter < -SCROLL_MAX)
            this.refs.scrollCounter = -SCROLL_MAX;

          this.setScrollLevel();
        }

        clearTimeout(this.refs.scrollTimer);
        clearInterval(this.refs.scrollInterval);
        this.refs.scrollTimer = setTimeout(() => {
          this.refs.scrollInterval = setInterval(() => {
            this.refs.scrollCounter =
              this.refs.scrollCounter < 1 && this.refs.scrollCounter > -1
                ? 0
                : this.refs.scrollCounter * 0.93;

            this.setScrollLevel();
          }, 100);
        }, 1000);
      };
    };

    this.addEvent('wheel', ID.MAIN, countOverScroll());
    this.addEvent('touchmove', ID.MAIN, countOverScroll());
  }

  setScrollLevel() {
    if (this.refs.scrollLevelLock) return;

    const nextScrollLevel = Math.round(this.refs.scrollCounter / 100);
    if (this.state.scrollLevel !== nextScrollLevel) {
      this.setState({ scrollLevel: nextScrollLevel });
    }
  }
}
