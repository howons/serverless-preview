import Component from '../core';

const SCROLL_MAX = 1000;
export default class ScrollIndicator extends Component {
  setup() {
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

  addScrollCountEvent() {
    this.addEvent('mousemove', '#main', (e) => {
      this.refs.mouseX = e.clientX;
    });

    const countOverScroll = (e) => {
      let lastTouchClientY = 0;

      return (e) => {
        const deltaY = e.deltaY ?? lastTouchClientY - e.touches[0].clientY;
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
        }
        console.log(this.refs.scrollCounter);
      };
    };

    this.addEvent('wheel', '#main', countOverScroll());
    this.addEvent('touchmove', '#main', countOverScroll());
  }
}
