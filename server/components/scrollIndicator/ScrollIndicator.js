import Component from '../core';

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
        const deltaY = e.deltaY ?? e.touches[0].clientY - lastTouchClientY;
        lastTouchClientY = e.touches ? e.touches[0].clientY : lastTouchClientY;

        const isTop = e.currentTarget.scrollTop === 0;
        const isBottom =
          e.currentTarget.scrollHeight <=
          Math.ceil(e.currentTarget.scrollTop + e.currentTarget.clientHeight);
        console.log(deltaY, isTop, isBottom);
      };
    };

    this.addEvent('wheel', '#main', countOverScroll());
    this.addEvent('touchmove', '#main', countOverScroll());
  }
}
