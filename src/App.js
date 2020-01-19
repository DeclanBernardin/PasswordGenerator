import React, {Component} from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';


const styles = ({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  }
})

class App extends Component {

  state = {
    finalPW: "password",
    passwordLength: 4,
  }

  changeLength = (event) => {
    this.setState({
      passwordLength: event.target.value
    })
    console.log(this.state.passwordLength)
  }

  togglePassword = () => {
    let length = this.state.passwordLength
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
        <button className="password" onClick={this.togglePassword}>Generate Password</button>
      </div>
      <input 
      name="Password Length" 
      type="number" 
      min="4" max="30" 
      placeholder="4"
      onChange={(event) => this.changeLength(event)}
      ></input>
    </div>
    );
  }
}

export default withStyles(styles)(App);
