import { getHashIndex } from '../../utils/hashes';
import { ID } from '../../utils/ids';
import { ROUTE_HASHES, setWindowPathname } from '../../utils/routes';
import Component from '../core';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';
import SlideBar from './SlideBar';

export default class Project extends Component {
  setup() {
    this.state = {
      slideIndex: 0,
    };

    this.refs = {
      imageRefs: [],
      descRefs: [],
    };

    super.setup();
  }

  hydrate() {
    this.refs.imageRefs = this.$target.querySelectorAll(`.project__snapshot`);
    this.refs.descRefs = this.$target.querySelectorAll(`.project__description`);

    super.hydrate();
  }

  render() {
    this.syncHashIndex();

    this.refs.imageRefs.forEach((imageRef, index) => {
      imageRef.classList.toggle('active', index === this.state.slideIndex);
    });

    this.refs.descRefs.forEach((descRef, index) => {
      descRef.classList.toggle('active', index === this.state.slideIndex);
    });

    super.render();
  }

  mounted() {
    const slideBarProp = {
      curSlideIndex: this.state.slideIndex,
      moveSlide: this.moveSlide.bind(this),
    };
    this.addChild(SlideBar, ID.SLIDE_BAR, slideBarProp);

    const scrollIndicatorProp = {
      curPathname: this.props.curPathname,
      curSlideIndex: this.state.slideIndex,
      loadPageData: this.moveSlide.bind(this),
    };
    this.addChild(
      ScrollIndicator,
      ID.SCROLL_INDICATOR_HORIZON,
      scrollIndicatorProp,
    );

    super.mounted();
  }

  async moveSlide(target) {
    let targetSlideIndex;

    if (typeof target === 'string') {
      targetSlideIndex = getHashIndex(this.props.curPathname, target);
      if (targetSlideIndex < 0) {
        await this.props.loadPageData(target);
        return;
      }
    } else if (typeof target === 'number') {
      targetSlideIndex = target;
    } else {
      console.error('Invalid target type');
      return;
    }

    setWindowPathname(
      this.props.curPathname,
      this.props.hashList[targetSlideIndex],
      true,
    );

    this.setState({
      slideIndex: targetSlideIndex,
    });
  }

  isFirstSlide() {
    return this.state.slideIndex <= 0;
  }

  isLastSlide() {
    return (
      this.state.slideIndex >= ROUTE_HASHES[this.props.curPathname].length - 1
    );
  }

  syncHashIndex() {
    const hashIndex = getHashIndex(
      this.props.curPathname,
      window.location.hash,
    );

    if (this.state.slideIndex !== hashIndex) {
      this.setState({
        slideIndex: hashIndex,
      });
    }
  }
}
