
class SubTool {
  constructor(props = {}) {
    super(props);
    this.items = props.items;
  }

  render () {
    return this.items.map(item => item.render());
  }
}
