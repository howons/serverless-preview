import { pathnameToId } from '../../utils/ids';
import { ROUTE, ROUTE_HASHES } from '../../utils/routes';
import Component from '../core';
import Project from '../project/Project';
import ProjectList from '../projectList/ProjectList';

export default class Main extends Component {
  setup() {
    this.refs = {
      curPagename: '',
      mainComponents: {
        [ROUTE.INTRO]: { constructor: null, instance: null },
        [ROUTE.PROFILE]: { constructor: null, instance: null },
        [ROUTE.PROJECT_LIST]: { constructor: ProjectList, instance: null },
        [ROUTE.PORTFOLIO]: { constructor: Project, instance: null },
        [ROUTE.ONE_DAY_HERO]: { constructor: Project, instance: null },
        [ROUTE.MUSSEUK]: { constructor: Project, instance: null },
        [ROUTE.VELOG]: { constructor: Project, instance: null },
      },
    };

    super.setup();
  }

  mounted() {
    this.handleRoute();

    super.mounted();
  }

  handleRoute() {
    if (this.props.curPathname === this.refs.curPagename) return;

    const curComponent = this.refs.mainComponents[this.refs.curPagename];
    if (curComponent) {
      curComponent.instance?.unmount();
      curComponent.instance = null;
    }

    const parser = new DOMParser();
    const newPageNode = parser.parseFromString(
      this.props.htmlCache.mainInner,
      'text/html',
    );
    this.$target.replaceChildren(newPageNode.body.childNodes[0]);

    this.refs.curPagename = this.props.curPathname;

    const nextComponent = this.refs.mainComponents[this.refs.curPagename];
    if (nextComponent.constructor) {
      const componentProps = {
        curPathname: this.refs.curPagename,
      };

      if (this.isProjectPage()) {
        componentProps.name = this.refs.curPagename.slice(1);
        componentProps.hashList = ROUTE_HASHES[this.refs.curPagename];
        componentProps.loadPageData = this.props.loadPageData;
      }

      nextComponent.instance = this.addChild(
        nextComponent.constructor,
        pathnameToId(this.refs.curPagename),
        componentProps,
      );
    }
  }

  isProjectPage() {
    return (
      this.refs.curPagename === ROUTE.PORTFOLIO ||
      this.refs.curPagename === ROUTE.ONE_DAY_HERO ||
      this.refs.curPagename === ROUTE.MUSSEUK ||
      this.refs.curPagename === ROUTE.VELOG
    );
  }
}
