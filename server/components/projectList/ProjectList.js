import Component from '../core';
import { projects } from './model';

export default class ProjectList extends Component {
  setup() {
    this.state = {
      selectedProject: projects[0].id,
    };

    this.refs = {
      imageRefs: [],
    };

    super.setup();
  }

  hydrate() {
    projects.forEach(({ id }) => {
      this.refs.imageRefs.push(this.$target.querySelector(this.getImageId(id)));

      this.addEvent('click', this.getImageId(id), (e) => {
        this.setState({
          selectedProject: id,
        });
      });
    });

    super.hydrate();
  }

  render() {
    this.refs.imageRefs.forEach((imageRef) => {
      imageRef.classList.toggle(
        'active',
        imageRef.id === this.getImageId(this.state.selectedProject),
      );
    });

    super.render();
  }

  getImageId(id) {
    return `#project-list__${id}`;
  }
}
