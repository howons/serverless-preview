import Component from '../core';

export default class SidebarItem extends Component {
  render() {
    this.$target.classList.toggle('open', this.props.isOpen);

    super.render();
  }

  hydrate() {
    this.addEvent('click', this.linkIdSelector, () => {
      this.$target.scrollIntoView({ behavior: 'smooth' });
    });

    super.hydrate();
  }

  mounted() {
    this.$target.classList.toggle('active', this.props.isActive);

    super.mounted();
  }

  get linkIdSelector() {
    return `${this.idSelector}__link`;
  }
}
