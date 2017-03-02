class Button extends React.Component {
  render() {
    return (
      <div className="myButton">
        Bouton
      </div>
    );
  }
}

ReactDOM.render(<Button />, document.getElementById('buttonReact'));

class Button2 extends React.Component {
  render() {
    return (
      <div className="myButton" style={{backgroundColor: "#f1c40f", color: "#2c3e50"}}>
        Bouton
      </div>
    );
  }
}

ReactDOM.render(<Button2 />, document.getElementById('buttonReactStyle'));

class Button3 extends React.Component {
  render() {
    return (
      <div className="myButton">
        {this.props.text}
      </div>
    );
  }
}

ReactDOM.render(<Button3 text="Nouveau texte" />, document.getElementById('buttonReactProps'));


class Button4 extends React.Component {
  state = {
    clicked: false
  }

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div
        className="myButton"
        style={{ backgroundColor: this.state.clicked ? 'red' : '#e67e22' }}
        onClick={this.handleClick}
      >
        {this.props.text}
      </div>
    );
  }
}

ReactDOM.render(<Button4 text="Changement" />, document.getElementById('buttonReactState'));


class Button5 extends React.Component {
  render() {
    return (
      <div className="myButton">
        Bouton
      </div>
    );
  }
}

ReactDOM.render(<Button5 />, document.getElementById('buttonAngular'));
