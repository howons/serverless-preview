import Component from '../core';

export default class SidebarItem extends Component {
  hydrate() {
    this.addEvent('click', this.linkIdSelector, () => {
      this.props.loadPageData(this.props.pathname);
    });

    super.hydrate();
  }

  render() {
    this.$target.classList.toggle('open', this.props.isOpen);
    this.$target.classList.toggle('active', this.props.isActive);

    super.render();
  }

  get linkIdSelector() {
    return `${this.idSelector}__link`;
  }
}
