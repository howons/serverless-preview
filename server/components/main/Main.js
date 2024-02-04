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

    this.refs.mainComponents[this.refs.curPagename]?.instance?.unmount();

    this.$target.innerHTML = this.props.htmlCache.mainInner;
    this.refs.curPagename = this.props.curPathname;

    const nextConstructor =
      this.refs.mainComponents[this.refs.curPagename].constructor;
    if (nextConstructor) {
      this.refs.mainComponents[this.refs.curPagename].instance = this.addChild(
        nextConstructor,
        pathnameToId(this.refs.curPagename),
        {},
      );
    }
  }
}
