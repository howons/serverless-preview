import Component from '../core';

export default class SidebarItem extends Component {
  render() {
    this.$target.classList.toggle('open', this.props.isOpen);

    super.render();
  }

  hydrate() {
    this.addEvent('click', this.idSelector, () => {
      console.log(this.$target.id, 'clicked');
    });

    super.hydrate();
  }
}
