import Component from '../core';

export default class SidebarItem extends Component {
  setup() {
    this.refs = {
      width: 0,
    };

    super.setup();
  }

  render() {
    this.$target.classList.toggle('open', this.props.isOpen);

    if (this.$target.classList.contains('sidebar-item__0')) {
      this.$target.style.paddingRight = 1;
    }

    super.render();
  }

  hydrate() {
    this.addEvent('click', this.idSelector, () => {
      this.$target.scrollIntoView({ behavior: 'smooth' });
    });

    const myWidth = this.$target.getBoundingClientRect().width;
    this.refs.width = Number(myWidth);

    super.hydrate();
  }
}
