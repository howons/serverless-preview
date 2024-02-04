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
        console.log(id);
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
        imageRef.id === this.getImageId(this.state.selectedProject).slice(1),
      );
    });

    super.render();
  }

  getImageId(id) {
    return `#project-list__${id}`;
  }
}
