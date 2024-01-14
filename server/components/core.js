export default class Component {
  $target;
  state;
  props;
  constructor(selector, props) {
    this.$target = document.querySelector(selector);

    if (!this.$target) return;

    this.props = props;
    this.setup();
  }

  setup() {}
  setEvent() {}

  render() {}
  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }
}
