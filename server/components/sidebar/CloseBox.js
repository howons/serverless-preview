import Component from '../core';

export default class CloseBox extends Component {
  render() {
    console.log('close clicked');

    super.render();
  }

  hydrate() {
    this.addEvent('click', this.idSelector, () => {
      this.props.setIsOpen(this.props.isOpen);
    });

    super.hydrate();
  }
}
