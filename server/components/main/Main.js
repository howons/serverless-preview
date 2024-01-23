import { checkIsBeforeOrAfter, getUrl } from '../../utils/routes';
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
    if (!window.location.pathname.includes(this.state.curPathname)) {
      this.$target.innerHTML = mainHtmlCache[this.state.curPathname].data;
      history.pushState({}, '', getUrl(this.state.curPathname));
    }

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
    if (mainHtmlCache[pathname]) {
      if (mainHtmlCache[pathname].status === 'loading') {
        return;
      }
      if (mainHtmlCache[pathname].status === 'loaded') {
        this.setState({ curPathname: pathname });
        return;
      }
    }

    try {
      this.setHtmlData(pathname, 'loading', '');

      const response = await fetch(getUrl(pathname));

      if (!response.ok) {
        throw new Error(response?.statusText ?? 'something wrong');
      }

      const mainInnerHTML = this.splitMainInnerHTML(await response.text());
      this.setHtmlData(pathname, 'loaded', mainInnerHTML);

      this.setState({ curPathname: pathname });
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

  splitMainInnerHTML(html) {
    return html
      .split('<div id="main" class="main">')[1]
      .split('<div id="main-divider"></div>')[0]
      .slice(0, -7);
  }
}
