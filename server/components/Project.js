import { ID } from '../utils/ids';
import Component from './core';
import ScrollIndicator from './scrollIndicator/ScrollIndicator';

export default class Project extends Component {
  setup() {
    this.state = {
      pageNum: 0,
    };

    this.refs = {
      imageRefs: [],
      descRefs: [],
    };

    super.setup();
  }

  hydrate() {
    this.refs.imageRefs = this.$target.querySelectorAll(
      `.${this.props.name}__snapshot`,
    );
    this.refs.descRefs = this.$target.querySelectorAll(
      `.${this.props.name}__description`,
    );

    super.hydrate();
  }

  mounted() {
    this.refs.imageRefs.forEach((imageRef, index) => {
      imageRef.classList.toggle('active', index === this.state.pageNum);
    });

    this.refs.descRefs.forEach((descRef, index) => {
      descRef.classList.toggle('active', index === this.state.pageNum);
    });

    const scrollIndicatorProp = {
      curPathname: this.state.curPathname,
      loadPageData: this.moveSlide.bind(this),
    };
    this.addChild(
      ScrollIndicator,
      ID.SCROLL_INDICATOR_HORIZON,
      scrollIndicatorProp,
    );

    super.mounted();
  }

  moveSlide(toNext) {}
}
