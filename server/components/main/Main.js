import { pathnameToId } from '../../utils/ids';
import { ROUTE } from '../../utils/routes';
import Component from '../core';
import ProjectList from '../projectList/ProjectList';

export default class Main extends Component {
  setup() {
    this.refs = {
      curPagename: '',
      mainComponents: {
        [ROUTE.INTRO]: { constructor: null, instance: null },
        [ROUTE.PROFILE]: { constructor: null, instance: null },
        [ROUTE.PROJECT_LIST]: { constructor: ProjectList, instance: null },
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
      nextComponent.instance = this.addChild(
        nextComponent.constructor,
        pathnameToId(this.refs.curPagename),
        {},
      );
    }
  }
}
