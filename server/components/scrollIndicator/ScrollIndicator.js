import Component from '../core';

const SCROLL_MAX = 800;
export default class ScrollIndicator extends Component {
  setup() {
    this.state = {
      scrollLevel: 0,
    };

    this.refs = {
      mouseX: 0,
      scrollCounter: 0,
    };

    super.setup();
  }

  hydrate() {
    this.addScrollCountEvent();

    super.hydrate();
  }

  render() {
    Array.from({ length: Math.round(SCROLL_MAX / 100) + 1 })
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

    super.render();
  }

  addScrollCountEvent() {
    this.addEvent('mousemove', '#main', (e) => {
      this.refs.mouseX = e.clientX;
    });

    const countOverScroll = (e) => {
      let lastTouchClientY = 0;
      let scrollTimer = null;

      return (e) => {
        const deltaY =
          e.deltaY ?? 5 * (lastTouchClientY - e.touches[0].clientY);
        lastTouchClientY = e.touches ? e.touches[0].clientY : lastTouchClientY;

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

        clearInterval(scrollTimer);
        scrollTimer = setInterval(() => {
          this.refs.scrollCounter =
            this.refs.scrollCounter < 1 && this.refs.scrollCounter > -1
              ? 0
              : this.refs.scrollCounter * 0.6;

          this.setScrollLevel();
        }, 700);
      };
    };

    this.addEvent('wheel', '#main', countOverScroll());
    this.addEvent('touchmove', '#main', countOverScroll());
  }

  setScrollLevel() {
    const nextScrollLevel = Math.round(this.refs.scrollCounter / 100);
    if (this.state.scrollLevel !== nextScrollLevel) {
      this.setState({ scrollLevel: nextScrollLevel });
    }
  }
}
