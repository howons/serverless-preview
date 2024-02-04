import { pathnameToId } from '../../utils/ids';
import { ROUTE, getWindowPathname } from '../../utils/routes';
import Component from '../core';
import ProjectList from '../projectList/ProjectList';

export default class Main extends Component {
  setup() {
    this.refs = {
      curPagename: getWindowPathname(),
      mainComponents: {
        [ROUTE.INTRO]: { constructor: null, instance: null },
        [ROUTE.PROFILE]: { constructor: null, instance: null },
        [ROUTE.PROJECT_LIST]: { constructor: ProjectList, instance: null },
      },
    };

    super.setup();
  }

  render() {
    this.handleRoute();

    super.render();
  }

  mounted() {
    Object.entries(this.refs.mainComponents).forEach(
      (pathname, { constructor, instance }) => {
        if (!constructor) return;

        if (this.refs.curPagename.includes(pathname)) {
          this.refs.mainComponents[pathname].instance = this.addChild(
            constructor,
            pathnameToId(pathname),
            {},
          );
        } else if (instance) {
          instance.unmount();
        }
      },
    );

    super.mounted();
  }

  handleRoute() {
    if (this.props.curPathname === this.refs.curPagename) return;

    this.$target.innerHTML = this.props.htmlCache.mainInner;
    this.refs.curPagename = this.props.curPathname;
  }
}
