import { getWindowPathname } from '../../utils/routes';
import Component from '../core';

export default class Main extends Component {
  setup() {
    this.refs = {
      curPagename: getWindowPathname(),
    };

    super.setup();
  }

  render() {
    this.handleRoute();

    super.render();
  }

  handleRoute() {
    if (this.props.curPathname === this.refs.curPagename) return;

    this.$target.innerHTML = this.props.htmlCache.mainInner;
    this.refs.curPagename = this.props.curPagename;
  }
}
