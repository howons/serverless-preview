import { ID, getStyleTagId } from '../../utils/ids';
import { checkIsBeforeOrAfter, getUrl } from '../../utils/routes';
import Component from '../core';
import Main from '../main/Main';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';
import Sidebar from '../sidebar/Sidebar';

const htmlCache = {};

export default class App extends Component {
  setup() {
    const path = window.location.pathname;
    this.state = {
      curPathname: path.includes('/dev') ? path.slice(4) : path,
      nextPageStatus: 'empty',
      prevPageStatus: 'empty',
    };

    super.setup();
  }

  hydrate() {
    htmlCache[this.state.curPathname] = {
      status: 'loaded',
      mainInner: this.$target.querySelector(ID.MAIN).innerHTML,
      styleTag: document.head.querySelector(
        getStyleTagId(this.state.curPathname),
      ),
    };

    super.hydrate();
  }

  mounted() {
    const sidebarProp = {
      curPathname: this.state.curPathname,
      loadPageData: this.loadPageData.bind(this),
    };
    this.addChild(Sidebar, ID.SIDEBAR, sidebarProp, null);

    const mainProp = {
      curPathname: this.state.curPathname,
      htmlCache: htmlCache[this.state.curPathname],
    };
    this.addChild(Main, ID.MAIN, mainProp);

    const scrollIndicatorProp = {
      curPathname: this.state.curPathname,
      loadPageData: this.loadPageData.bind(this),
      nextPageStatus: this.state.nextPageStatus,
      prevPageStatus: this.state.prevPageStatus,
    };
    this.addChild(ScrollIndicator, ID.SCROLL_INDICATOR, scrollIndicatorProp);

    super.mounted();
  }

  async loadPageData(pathname) {
    if (htmlCache[pathname]) {
      if (htmlCache[pathname].status === 'loading') {
        return;
      }
      if (htmlCache[pathname].status === 'loaded') {
        this.setState({ curPathname: pathname });
        return;
      }
    }

    try {
      this.setHtmlData(pathname, 'loading');

      const response = await fetch(getUrl(pathname));

      if (!response.ok) {
        throw new Error(response?.statusText ?? 'something wrong');
      }

      const responseHtml = await response.text();
      const mainInnerHTML = this.splitMainInnerHTML(responseHtml);
      const headStyleTag = this.splitHeadStyleTag(responseHtml);
      this.setHtmlData(pathname, 'loaded', mainInnerHTML, headStyleTag);

      this.setState({ curPathname: pathname });
    } catch (err) {
      console.error(err);
      this.setHtmlData(pathname, 'error');
    }
  }

  setHtmlData(pathname, status, mainInner = '', styleTag = '') {
    htmlCache[pathname] = {
      status,
      mainInner,
      styleTag,
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
    return html.split('<main id="main" class="main">')[1].split('</main>')[0];
  }
  splitHeadStyleTag(html) {
    return html
      .split('<link rel="stylesheet" href="./src/style.css"/>')[1]
      .split('</head>')[0];
  }
}
