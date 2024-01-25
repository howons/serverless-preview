import { getStyleTagId } from '../../utils/ids';
import { getUrl } from '../../utils/routes';
import Component from '../core';

export default class Main extends Component {
  render() {
    this.handleRoute();

    super.render();
  }

  handleRoute() {
    if (window.location.pathname.includes(this.props.curPathname)) return;

    if (!document.head.querySelector(getStyleTagId(this.props.curPathname))) {
      document.head.insertAdjacentHTML(
        'beforeend',
        this.props.htmlCache.styleTag,
      );
    }
    this.$target.innerHTML = this.props.htmlCache.mainInner;
    history.pushState({}, '', getUrl(this.props.curPathname));
  }
}
