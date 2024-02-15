import Component from '../core';

export default class CloseBox extends Component {
  hydrate() {
    this.addEvent('click', this.idSelector, () => {
      if (this.props.isOpen) {
        this.props.activeItemRef.scrollIntoView({ behavior: 'smooth' });
      } else {
        this.props.firstItemRef.scrollIntoView({ behavior: 'smooth' });
      }

      this.props.setIsOpen(!this.props.isOpen);
    });

    super.hydrate();
  }

  render() {
    this.$target.classList.toggle('open', this.props.isOpen);

    super.render();
  }
}
