import { ID } from '../utils/ids';
import { ROUTE_HASHES, getHashIndex, setWindowPathname } from '../utils/routes';
import Component from './core';
import ScrollIndicator from './scrollIndicator/ScrollIndicator';

export default class Project extends Component {
  setup() {
    this.state = {
      slideNum: 0,
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
      imageRef.classList.toggle('active', index === this.state.slideNum);
    });

    this.refs.descRefs.forEach((descRef, index) => {
      descRef.classList.toggle('active', index === this.state.slideNum);
    });

    const scrollIndicatorProp = {
      curPathname: this.props.curPathname,
      curSlideNum: this.state.slideNum,
      loadPageData: this.moveSlide.bind(this),
    };
    this.addChild(
      ScrollIndicator,
      ID.SCROLL_INDICATOR_HORIZON,
      scrollIndicatorProp,
    );

    super.mounted();
  }

  async moveSlide(targetSlide) {
    const targetSlideNum = getHashIndex(this.props.curPathname, targetSlide);

    this.setState({
      slideNum: targetSlideNum,
    });

    setWindowPathname(
      this.props.curPathname,
      this.props.hashList[this.state.slideNum],
      true,
    );
  }

  isFirstSlide() {
    return this.state.slidenum <= 0;
  }

  isLastSlide() {
    return (
      this.state.slideNum >= ROUTE_HASHES[this.props.curPathname].length - 1
    );
  }
}
