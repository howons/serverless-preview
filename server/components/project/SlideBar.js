import { scrollIntoView } from '../../utils/scroll';
import Component from '../core';

export default class SlideBar extends Component {
  setup() {
    this.refs = {
      itemRefs: [],
      containerRef: null,
    };

    super.setup();
  }

  hydrate() {
    this.refs.itemRefs = this.$target.querySelectorAll('.project__slide');
    this.refs.containerRef = this.$target.querySelector(
      '#project__slide-wrapper',
    );

    this.refs.itemRefs.forEach((itemRef, index) => {
      this.addEvent('click', `#${itemRef.id}`, () => {
        this.props.moveSlide(index);
      });
    });

    super.hydrate();
  }

  render() {
    scrollIntoView(
      this.refs.containerRef,
      this.refs.itemRefs[this.props.curSlideIndex],
      false,
      'smooth',
      'center',
    );

    super.render();
  }
}
