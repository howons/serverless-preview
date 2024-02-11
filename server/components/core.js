const singleton = {};
const eventCallbacks = {};

export default class Component {
  $target;
  root;
  state;
  props;
  refs;
  events = [];
  children = [];
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
        popstate: [],
      };
    }
  }
  hydrate() {
    /**@note addEvent 추가 위치 */
    this.mounted();
    if (this.isRoot) this.setEventDeligation();
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
    const child = new Child(selector, props, root);
    this.children.push(child);

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
    this.$target.remove();
    this.$target = null;

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
  }

  /* util methods */
  get isRoot() {
    return this.root === this.$target.id;
  }
  get idSelector() {
    return `#${this.$target.id}`;
  }
}
