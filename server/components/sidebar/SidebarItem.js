import { getWindowPathname } from '../../utils/routes';
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

    super.render();
  }

  mounted() {
    this.$target.classList.toggle('active', this.props.isActive);

    super.mounted();
  }

  get linkIdSelector() {
    return `${this.idSelector}__link`;
  }
}
