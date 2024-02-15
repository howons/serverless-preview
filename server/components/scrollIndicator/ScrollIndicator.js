import { getNextHash, getPrevHash } from '../../utils/hashes';
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
      scrollCounter: 0,
      scrollLevelLock: false,
      scrollInitialDelay: null,
      scrollInterval: null,
      scrollRefresh: null,
      scrollCallback: null,
    };

    super.setup();
  }

  hydrate() {
    this.addScrollCountEvent();

    this.$target.classList.toggle('inactive', !this.isActive());

    super.hydrate();
  }

  render() {
    if (!this.isActive()) {
      super.render();
      return;
    }

    const horizonModifier = this.isHorizon() ? '--horizon' : '';

    Array.from({ length: SCROLL_LEVEL_MAX + 1 })
      .map((_, index) => index)
      .forEach((num) => {
        this.$target.classList.toggle(
          `scroll-indicator--level${num}${horizonModifier}`,
          this.state.scrollLevel === num,
        );
        if (num > 0) {
          this.$target.classList.toggle(
            `scroll-indicator--level${-num}${horizonModifier}`,
            this.state.scrollLevel === -num,
          );
        }
      });

    const nextTriggered = this.state.scrollLevel >= SCROLL_LEVEL_MAX;
    const prevTriggered = this.state.scrollLevel <= -SCROLL_LEVEL_MAX;

    if (nextTriggered || prevTriggered) {
      const targetPage = this.getTargetPage(nextTriggered);

      if (targetPage) {
        this.refs.scrollLevelLock = true;

        this.setState({
          scrollLevel: this.state.scrollLevel + (nextTriggered ? -1 : 1),
        });

        this.props.loadPageData(targetPage).then(() => {
          clearTimeout(this.refs.scrollInitialDelay);
          clearInterval(this.refs.scrollInterval);
          this.refs.scrollCounter = 0;

          this.refs.scrollRefresh = setTimeout(() => {
            this.refs.scrollLevelLock = false;
            this.setState({ scrollLevel: 0 });
          }, 100);
        });
      }
    }

    super.render();
  }

  mounted() {
    this.$target.classList.toggle('inactive', !this.isActive());

    super.mounted();
  }

  unmount() {
    clearTimeout(this.refs.scrollInitialDelay);
    clearTimeout(this.refs.scrollRefresh);
    clearInterval(this.refs.scrollInterval);

    const $main = document.querySelector(ID.MAIN);
    $main.removeEventListener('wheel', this.refs.scrollCallback);
    $main.removeEventListener('touchmove', this.refs.scrollCallback);

    super.unmount();
  }

  getTargetPage(isNext) {
    const { curSlideIndex, curPathname } = this.props;
    if (this.isHorizon()) {
      return isNext
        ? getNextHash(curPathname, curSlideIndex)
        : getPrevHash(curPathname, curSlideIndex);
    } else {
      return isNext ? getNextRoute(curPathname) : getPrevRoute(curPathname);
    }
  }

  addScrollCountEvent() {
    const countOverScroll = (e) => {
      let lastTouchClientY = 0;

      return (e) => {
        if (!this.isActive()) return;

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

        clearTimeout(this.refs.scrollInitialDelay);
        clearInterval(this.refs.scrollInterval);

        this.refs.scrollInitialDelay = setTimeout(() => {
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

    this.refs.scrollCallback = countOverScroll();

    const $main = document.querySelector(ID.MAIN);
    $main.addEventListener('wheel', this.refs.scrollCallback);
    $main.addEventListener('touchmove', this.refs.scrollCallback);
  }

  setScrollLevel() {
    if (this.refs.scrollLevelLock) return;

    const nextScrollLevel = Math.round(this.refs.scrollCounter / 100);
    if (this.state.scrollLevel !== nextScrollLevel) {
      this.setState({ scrollLevel: nextScrollLevel });
    }
  }

  isHorizon() {
    return this.props.curSlideIndex !== undefined;
  }

  isActive() {
    return (
      (this.isHorizon() && !!window.location.hash) ||
      (!this.isHorizon() && !window.location.hash)
    );
  }
}
