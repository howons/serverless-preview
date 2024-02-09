import Component from '../core';

export default class SidebarItem extends Component {
  hydrate() {
    this.addEvent('click', this.linkIdSelector, () => {
      this.props.loadPageData(this.props.pathname, this.props.hash);
    });

    super.hydrate();
  }

  render() {
    this.$target.classList.toggle('open', this.props.isOpen);

    super.render();
  }

  mounted() {
    if (this.props.hash) {
      this.$target.classList.toggle(
        'active',
        this.props.hash === window.location.hash,
      );
    } else {
      this.$target.classList.toggle('active', this.props.isActive);
    }

    super.mounted();
  }

  get linkIdSelector() {
    return `${this.idSelector}__link`;
  }
}
