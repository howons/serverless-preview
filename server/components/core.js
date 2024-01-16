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
    this.root = root || this.$target.id;

    this.setup();
    this.hydrate();
  }

  setup() {
    if (this.isRoot()) {
      eventCallbacks[this.$target.id] = {
        click: [],
      };
    }
  }
  hydrate() {
    this.mounted();
    this.setEvent();
  }

  render() {
    this.mounted();
  }
  mounted() {
    /**@note children 추가 작업 위치*/
  }
  setEvent() {
    if (!this.isRoot()) return;

    for (const [eventType, targetList] of Object.entries(
      eventCallbacks[this.$target.id],
    )) {
      this.$target.addEventListener(eventType, (event) => {
        targetList.forEach(({ selector, callback }) => {
          if (!event.target.closest(selector)) return false;

          callback(event);
        });
      });
    }
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  addChild(Child, selector, props) {
    new Child(selector, props, this.$target.id);
  }
  addEvent(eventType, selector, callback) {
    if (!eventCallbacks[root]) return;

    eventCallbacks[root][eventType]?.push({
      selector,
      callback,
    });
  }

  isRoot() {
    return this.root === this.$target.id;
  }
}
