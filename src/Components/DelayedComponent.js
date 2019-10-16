import * as React from 'react';

// FIXME: бага с react-anime
// Т.к. react-anime ищет родительскую ноду, его необходимо монтировать
// только в компонент, который уже в DOM
export default class DelayedComponent extends React.Component {
  state = { component: <div /> };

  componentDidMount = () => this.setState({ component: this.props.children });
  render = () => this.state.component;
}
