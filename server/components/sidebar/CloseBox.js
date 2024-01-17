import Component from '../core';

export default class CloseBox extends Component {
  render() {
    this.$target.classList.toggle('open', this.props.isOpen);

    super.render();
  }

  hydrate() {
    this.addEvent('click', this.idSelector, () => {
      this.props.setIsOpen(!this.props.isOpen);
    });

    super.hydrate();
  }
}
