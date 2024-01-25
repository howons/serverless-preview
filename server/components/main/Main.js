import { getUrl } from '../../utils/routes';
import Component from '../core';

export default class Main extends Component {
  render() {
    if (!window.location.pathname.includes(this.props.curPathname)) {
      this.$target.innerHTML = this.props.htmlCache.mainInner;
      history.pushState({}, '', getUrl(this.props.curPathname));
    }

    super.render();
  }
}
