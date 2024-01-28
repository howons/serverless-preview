import { ID, getStyleTagId } from '../../utils/ids';
import {
  ROUTES,
  ROUTE_TITLE,
  checkIsBeforeOrAfter,
  getUrl,
} from '../../utils/routes';
import { getStyleTag } from '../../utils/styles';
import Component from '../core';
import Main from '../main/Main';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';
import Sidebar from '../sidebar/Sidebar';

const htmlCache = {};

export default class App extends Component {
  setup() {
    this.state = {
      curPathname: this.getWindowPathname(),
      nextPageStatus: 'empty',
      prevPageStatus: 'empty',
    };

    super.setup();
  }

  hydrate() {
    htmlCache[this.state.curPathname] = {
      status: 'loaded',
      mainInner: this.$target.querySelector(ID.MAIN).innerHTML,
    };

    window.addEventListener('popstate', (e) => {
      this.setPathname(this.getWindowPathname());
    });

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
    if (!ROUTES.some((route) => route === pathname)) {
      console.error('Incorrect pathname: ', pathname);
      return;
    }

    if (htmlCache[pathname]) {
      if (htmlCache[pathname].status === 'loading') {
        return;
      }
      if (htmlCache[pathname].status === 'loaded') {
        this.setPathname(pathname, true);
        return;
      }
    }

    try {
      this.setHtmlData(pathname, 'loading');

      this.loadPageStylesheet(pathname);
      const response = await fetch(getUrl(pathname));

      if (!response.ok) {
        throw new Error(response?.statusText ?? 'something wrong');
      }

      const responseHtml = await response.text();
      const mainInnerHTML = this.splitMainInnerHTML(responseHtml);
      this.setHtmlData(pathname, 'loaded', mainInnerHTML);

      this.setPathname(pathname, true);
    } catch (err) {
      console.error(err);
      this.setHtmlData(pathname, 'error');
    }
  }

  setPathname(pathname, shouldPush) {
    this.setState({ curPathname: pathname });
    document.title = ROUTE_TITLE[pathname];

    if (shouldPush) {
      history.pushState({}, '', getUrl(pathname));
    }
  }

  setHtmlData(pathname, status, mainInner = '') {
    htmlCache[pathname] = {
      status,
      mainInner,
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

  loadPageStylesheet(pathname) {
    if (document.head.querySelector(getStyleTagId(pathname))) return;

    const styleTag = getStyleTag(pathname);
    document.head.insertAdjacentHTML('beforeend', styleTag);
  }

  getWindowPathname() {
    const path = window.location.pathname;
    return path.includes('/dev') ? path.slice(4) : path;
  }
}
