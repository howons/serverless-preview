const singleton = {};
const eventCallbacks = {};

export default class Component {
  $target;
  root;
  state;
  props;
  constructor(selector, props, root) {
    if (singleton[selector]) {
      this.props = props;
      this.render();

      return singleton[selector];
    }

    this.$target = document.querySelector(selector);
    if (!this.$target) return;

    singleton[selector] = this;
    this.props = props;
    this.root = root;

    this.setup();
  }

  setup() {}
  mounted() {}
  setEvent() {
    if (root) return;

    for (const [eventType, { selector, callbacks }] of Object.entries(
      eventCallbacks[this.$target.id],
    )) {
      this.$target.addEventListener(eventType, (event) => {
        if (!event.target.closest(selector)) return false;

        callbacks.forEach((callback) => {
          callback(event);
        });
      });
    }
  }

  render() {
    this.mounted();
  }
  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  addChild(Child, selector, props) {
    new Child(selector, props, this.$target.id);

    if (!root && !eventCallbacks[this.$target.id]) {
      eventCallbacks[this.$target.id] = {
        click: [],
      };
    }
  }
  addEvent() {}
}
