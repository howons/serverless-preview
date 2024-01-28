import Component from '../core';

export default class Main extends Component {
  render() {
    this.handleRoute();

    super.render();
  }

  handleRoute() {
    if (window.location.pathname.includes(this.props.curPathname)) return;

    this.$target.innerHTML = this.props.htmlCache.mainInner;
  }
}
