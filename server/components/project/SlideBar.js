import Component from '../core';

export default class SlideBar extends Component {
  setup() {
    this.refs = {
      itemRefs: [],
    };

    super.setup();
  }

  hydrate() {
    this.refs.itemRefs = this.$target.querySelectorAll('.project__link');

    this.refs.itemRefs.forEach((itemRef, index) => {
      this.addEvent('click', `#${itemRef.id}`, () => {
        this.props.moveSlide(index);
      });
    });

    super.hydrate();
  }

  mounted() {
    this.refs.itemRefs[this.props.curSlideIndex].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });

    super.mounted();
  }
}
