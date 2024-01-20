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
    const pathname = window.location.pathname;
    this.$target.classList.toggle(
      'active',
      pathname.includes(this.props.itemPathname),
    );

    super.mounted();
  }

  get linkIdSelector() {
    return `${this.idSelector}__link`;
  }
}
