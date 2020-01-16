import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    finalPW: "password"
  }

  togglePassword = (length) => {
   let result = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=?/><:;{[}]';
   let charatersLength = characters.length;
   for (let i = 0; i < length; i++ ){
     result += characters.charAt(Math.floor(Math.random() * charatersLength))
   }
   let test = result
   this.setState({
     finalPW: test
   })
   console.log(test)
   return result
  }


  render(){
    return (
    <div className="container">
      <div>
        <input className="password" value={this.state.finalPW}></input>
          <br className="break"/>
        <button className="password" onClick={() => this.togglePassword(20)}>Generate Password</button>
      </div>
    </div>
    );
  }
}

export default App;
