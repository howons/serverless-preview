import Component from '../core';

export default class SlideBar extends Component {
  setup() {
    this.refs = {
      itemRefs: [],
    };

    super.setup();
  }
}
