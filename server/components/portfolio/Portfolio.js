import Component from '../core';

export default class Portfolio extends Component {
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
    this.refs.imageRefs = this.$target.querySelectorAll('.portfolio__snapshot');
    this.refs.descRefs = this.$target.querySelectorAll(
      '.portfolio__description',
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

    super.mounted();
  }
}
