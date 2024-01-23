import { checkIsBeforeOrAfter } from '../../utils/routes';
import Component from '../core';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';

const mainHtmlCache = {};

export default class Main extends Component {
  setup() {
    this.state = {
      curPathname: window.location.pathname,
      nextPageStatus: 'empty',
      prevPageStatus: 'empty',
    };

    super.setup();
  }

  hydrate() {
    mainHtmlCache[this.state.curPathname] = {
      status: 'loaded',
      data: this.$target.innerHTML,
    };

    super.hydrate();
  }

  render() {
    super.render();
  }

  mounted() {
    const scrollIndicatorProp = {
      curPathname: this.state.curPathname,
      loadPageData: this.loadPageData.bind(this),
      nextPageStatus: this.state.nextPageStatus,
      prevPageStatus: this.state.prevPageStatus,
    };
    this.addChild(ScrollIndicator, '#scroll-indicator', scrollIndicatorProp);

    super.mounted();
  }

  async loadPageData(pathname) {
    if (mainHtmlCache[pathname] && mainHtmlCache[pathname].status !== 'error') {
      return;
    }

    try {
      this.setHtmlData(pathname, 'loading', '');

      const url = `${window.location.protocol}//${window.location.host}${pathname}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response?.statusText ?? 'something wrong');
      }

      console.log(response);
      this.setHtmlData(pathname, 'loaded', '');
    } catch (err) {
      console.error(err);
      this.setHtmlData(pathname, 'error', '');
    }
  }

  setHtmlData(pathname, status, data) {
    mainHtmlCache[pathname] = {
      status,
      data,
    };

    const { isBefore, isAfter } = checkIsBeforeOrAfter(
      this.state.curPathname,
      pathname,
    );
    if (isBefore) {
      this.setState({ prevPageStatus: status });
    }
    if (isAfter) {
      this.setState({ nextPageStatus: status });
    }
  }
}
