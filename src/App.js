import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    password: "password",
    number: 0,
    finalPW: "password"
  }

  togglePassword = () => {
    console.log("password = ", this.state.password);
    this.setState({
      number: this.state.number + 1
    })
    console.log("test", this.state.number);
    this.setState({
      finalPW: this.state.password + this.state.number 
    })
    console.log(this.state.finalPW);
    
  }

  render(){
    return (
    <div className="container">
      <div>
          <input className="password" value={this.state.finalPW}></input>
        <br/>
          <button className="password" onClick={this.togglePassword}>Generate Password</button>
      </div>
    </div>
    );
  }
}

export default App;
