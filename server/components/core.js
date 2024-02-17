const singleton = {};
const eventCallbacks = {};
const stateStore = {};

export default class Component {
  $target;
  root;
  state = {};
  props = {};
  refs = {};
  events = [];
  children = [];
  raf = null;
  constructor(selector, props, root) {
    if (!selector.startsWith('#')) {
      console.error('selector is not Id');
      return;
    }

    if (singleton[selector]) {
      singleton[selector].props = { ...props };
      singleton[selector].render();

      return singleton[selector];
    }

    this.$target = document.querySelector(selector);
    if (!this.$target) return;

    singleton[selector] = this;
    this.props = { ...props };
    this.root = root || this.id;

    this.setup();
    this.hydrate();
  }

  /* lifecycle methods */
  setup() {
    if (this.isRoot) {
      eventCallbacks[this.id] = {
        click: [],
        scroll: [],
        mousemove: [],
        wheel: [],
        touchmove: [],
        popstate: [],
      };
    }

    stateStore[this.id] = { ...this.state };
  }
  hydrate() {
    /**@note addEvent 추가 위치 */
    if (this.isRoot) this.setEventDeligation();

    this.render();
  }
  render() {
    if (!this.$target) return;

    this.mounted();
  }
  mounted() {
    /**@note children 추가 작업 위치*/
  }
  /**@note eventCallbacks의 내부 배열은 참조를 변경하지 말 것 */
  setEventDeligation() {
    if (!this.isRoot) return;

    for (const [eventType, targetList] of Object.entries(
      eventCallbacks[this.id],
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
    stateStore[this.id] = { ...stateStore[this.id], ...nextState };

    cancelAnimationFrame(this.raf);

    if (this.shallowEqualState()) return;

    this.raf = requestAnimationFrame(() => {
      this.state = stateStore[this.id];

      this.render();
    });
  }
  addChild(Child, selector, props, root = this.root) {
    const child = new Child(selector, props, root);

    if (!this.children.includes(child)) {
      this.children.push(child);
    }

    return child;
  }
  addEvent(eventType, selector, callback) {
    if (!eventCallbacks[this.root]) return;

    const callbackInfo = {
      selector,
      callback,
    };
    eventCallbacks[this.root][eventType]?.push(callbackInfo);

    this.events.push({
      eventType,
      callbackInfo,
    });
  }
  unmount() {
    this.children.forEach((child) => {
      child.unmount();
    });

    singleton[this.idSelector] = null;

    stateStore[this.id] = {};
    cancelAnimationFrame(this.raf);

    this.events.forEach(({ eventType, callbackInfo }) => {
      const targetIndice = [];
      eventCallbacks[this.root][eventType].forEach(
        (prevCallbackInfo, index) => {
          if (prevCallbackInfo === callbackInfo) {
            targetIndice.push(index);
          }
        },
      );
      targetIndice.reverse().forEach((target) => {
        eventCallbacks[this.root][eventType].splice(target, 1);
      });
    });

    this.$target.remove();
    this.$target = null;
  }

  /* util methods */
  get id() {
    return this.$target.id;
  }
  get idSelector() {
    return `#${this.id}`;
  }
  get isRoot() {
    return this.root === this.id;
  }
  shallowEqualState() {
    const keys = Object.keys(this.state);
    const nextKeys = Object.keys(stateStore[this.id]);

    if (keys.length !== nextKeys.length) return false;

    for (const key of keys) {
      if (this.state[key] !== stateStore[key]) return false;
    }

    return true;
  }
}
