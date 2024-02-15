import Component from '../core';
import { projects } from './model';

export default class ProjectList extends Component {
  setup() {
    this.state = {
      selectedProjectIndex: 0,
    };

    this.refs = {
      imageRefs: [],
      skillListRefs: [],
      descRefs: [],
    };

    super.setup();
  }

  hydrate() {
    this.refs.imageRefs = this.$target.querySelectorAll(
      '.project-list__thumbnail',
    );

    projects.forEach(({ id }, index) => {
      this.addEvent('click', this.getImageId(id), (e) => {
        this.setState({
          selectedProjectIndex: index,
        });
      });
    });

    this.refs.skillListRefs = this.$target.querySelectorAll(
      '.project-list__skill-list',
    );
    this.refs.descRefs = this.$target.querySelectorAll(
      '.project-list__description',
    );

    super.hydrate();
  }

  render() {
    this.refs.imageRefs.forEach((imageRef, index) => {
      imageRef.classList.toggle(
        'active',
        index === this.state.selectedProjectIndex,
      );
    });

    this.refs.skillListRefs.forEach((skillListRef, index) => {
      skillListRef.classList.toggle(
        'active',
        index === this.state.selectedProjectIndex,
      );
    });

    this.refs.descRefs.forEach((descRef, index) => {
      descRef.classList.toggle(
        'active',
        index === this.state.selectedProjectIndex,
      );
    });

    super.render();
  }

  getImageId(id) {
    return `#project-list__${id}`;
  }
}
