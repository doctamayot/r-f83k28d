import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0}
  }

  add(){
    this.setState({ counter: this.state.counter + 1})
  }
  render() {
     return (      
      <div>
        <span className="value">{this.state.counter}</span>
        <button onClick= {this.add.bind(this)} id="inc">Incrementa</button>
      </div>
    );
    
    
}
}

export default App;
