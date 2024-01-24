const singleton = {};
const eventCallbacks = {};

export default class Component {
  $target;
  root;
  state;
  props;
  refs;
  constructor(selector, props, root) {
    if (singleton[selector]) {
      singleton[selector].props = { ...props };
      singleton[selector].render();

      return singleton[selector];
    }

    this.$target = document.querySelector(selector);
    if (!this.$target) return;

    singleton[selector] = this;
    this.props = { ...props };
    this.root = root || this.$target.id;

    this.setup();
    this.hydrate();
  }

  /* lifecycle methods */
  setup() {
    if (this.isRoot) {
      eventCallbacks[this.$target.id] = {
        click: [],
        scroll: [],
        mousemove: [],
        wheel: [],
        touchmove: [],
      };
    }
  }
  hydrate() {
    /**@note addEvent 추가 위치 */
    this.mounted();
    if (this.isRoot) this.setEventDeligation();
  }
  render() {
    this.mounted();
  }
  mounted() {
    /**@note children 추가 작업 위치*/
  }
  setEventDeligation() {
    if (!this.isRoot) return;

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

  /* trigger methods */
  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }
  addChild(Child, selector, props, root = this.root) {
    return new Child(selector, props, root);
  }
  addEvent(eventType, selector, callback) {
    if (!eventCallbacks[this.root]) return;

    eventCallbacks[this.root][eventType]?.push({
      selector,
      callback,
    });
  }
  unmount() {
    singleton[this.idSelector] = null;
    this.$target.remove();
  }

  /* util methods */
  get isRoot() {
    return this.root === this.$target.id;
  }
  get idSelector() {
    return `#${this.$target.id}`;
  }
}
