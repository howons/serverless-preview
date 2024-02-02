import { pathnameToId } from '../../utils/ids';
import { ROUTE, getWindowPathname } from '../../utils/routes';
import Component from '../core';

export default class Main extends Component {
  setup() {
    this.refs = {
      curPagename: getWindowPathname(),
      mainComponents: {
        [ROUTE.INTRO]: null,
        [ROUTE.PROFILE]: null,
        [ROUTE.PROJECT_LIST]: null,
      },
    };

    super.setup();
  }

  render() {
    this.handleRoute();

    super.render();
  }

  mounted() {
    Object.entries(this.mainComponents).forEach((pathname, component) => {
      if (!component) return;

      if (this.refs.curPagename.includes(pathname)) {
        this.addChild(component, pathnameToId(pathname), {});
      } else {
        component.unmount();
      }
    });

    super.mounted();
  }

  handleRoute() {
    if (this.props.curPathname === this.refs.curPagename) return;

    this.$target.innerHTML = this.props.htmlCache.mainInner;
    this.refs.curPagename = this.props.curPagename;
  }
}
