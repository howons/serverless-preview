import Component from '../core';

export default class SidebarItem extends Component {
  render() {
    this.$target.classList.toggle('open', this.props.isOpen);

    super.render();
  }

  hydrate() {
    this.addEvent('click', this.idSelector, () => {
      this.$target.scrollIntoView({ behavior: 'smooth' });
    });

    super.hydrate();
  }
}
