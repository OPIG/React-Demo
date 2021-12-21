import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this._bind("render", "handleClick");
    this.state = {
      items: this.props.items,
      disabled: true,
    };
  }

  _bind(...methods) {
    methods.map((method) => {
      this[method] = this[method].bind(this);
    });
  }

  componentDidMount() {
    this.setState({
      disabled: false,
    });
  }

  handleClick() {
    this.setState({
      items: this.state.items.concat("item " + this.state.items.length),
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick} disabled={this.state.disabled}>
          Add Item
        </button>
        <ul>
          {this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
