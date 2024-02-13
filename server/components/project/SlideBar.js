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
    this.refs.itemRefs = this.$target.querySelectorAll('.project__link');
    this.refs.containerRef = this.$target.querySelector(
      '#project__link-wrapper',
    );

    this.refs.itemRefs.forEach((itemRef, index) => {
      this.addEvent('click', `#${itemRef.id}`, () => {
        this.props.moveSlide(index);
      });
    });

    super.hydrate();
  }

  mounted() {
    scrollIntoView(
      this.refs.containerRef,
      this.refs.itemRefs[this.props.curSlideIndex],
      false,
      'smooth',
      'center',
    );

    super.mounted();
  }
}
