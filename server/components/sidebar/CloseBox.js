import Component from '../core';

export default class CloseBox extends Component {
  render() {
    this.$target.classList.toggle('open', this.props.isOpen);

    super.render();
  }

  hydrate() {
    this.addEvent('click', this.idSelector, () => {
      this.props.setIsOpen(!this.props.isOpen);

      if (this.props.isOpen) {
        this.props.firstItemRef.$target.scrollIntoView({ behavior: 'smooth' });
      } else {
        this.props.activeItemRef.$target.scrollIntoView({ behavior: 'smooth' });
      }
    });

    super.hydrate();
  }
}
