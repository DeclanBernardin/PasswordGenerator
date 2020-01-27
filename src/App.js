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
    passwordLength: 8,
    capitalLetters: true,
    lowerCaseLetters: true,
    addNumbers: true,
    addAmbiguousCharacters: false,
    addSimilarCharacters: true,
  }

  changeLength = (event) => {
    this.setState({
      passwordLength: event.target.value
    })
    console.log(this.state.passwordLength)
    
  }

  handleCaps = () => {
    this.setState({
      capitalLetters: !this.state.capitalLetters
    })
    console.log(this.state.capitalLetters)
  }

  handleLowerCase = () => {
    this.setState({
      lowerCaseLetters: !this.state.lowerCaseLetters
    })
    console.log(this.state.lowerCaseLetters)
  }

  handleNumbers = () => {
    this.setState({
      addNumbers: !this.state.addNumbers
    })
    console.log(this.state.addNumbers)
  }

  handleAmbiguous = () => {
    this.setState({
      addAmbiguousCharacters: !this.state.addAmbiguousCharacters
    })
    console.log(this.state.addAmbiguousCharacters)
  }

  handleSimilar = () => {
    this.setState({
      addSimilarCharacters: !this.state.addSimilarCharacters
    })
    console.log(this.state.addSimilarCharacters)
  }

  togglePassword = () => {
    let length = this.state.passwordLength
   let result = '';
   let characters = ''; 
    let capitals = 'ABCDEFGHJKMNPQRSTUVWXYZ';
    let lowerCase = 'abcdefghjkmnpqrstuvwxyz';
    let numbers = '23456789';
   let ambiquousCharacters = '!@#$%^&*()_-+=?/><:;{[}]';
   let similarCharacters = '0OoIl1Li'

   if(this.state.capitalLetters === true){
     characters += capitals
   }
   if(this.state.lowerCaseLetters === true){
     characters += lowerCase
   }
   if(this.state.addNumbers === true){
     characters += numbers
   }
   if(this.state.addAmbiguousCharacters === true){
     characters += ambiquousCharacters
   }
   if(this.state.addSimilarCharacters === true){
     characters += similarCharacters
   }

    if (length < 4) {
      alert('This Password is to SHORT! Must be above 4 characters.')
    } else if (length > 30) {
      alert('This Password is to LONG! must be below 30 characters.')
    } else {
   
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
  }


  render(){
    return (
      <div>
    <div className="container">
      <div>
        <input className="password" value={this.state.finalPW}></input>
          <br className="break"/>
        <button className="password" onClick={this.togglePassword}>Generate Password</button>
      </div>
      <br/>
    </div>
      <div>
        <form className="form">
          <br />
          Password Length:
        <input
            name="Password Length"
            type="number"
            min="4" max="30"
            placeholder="8"
            onChange={(event) => this.changeLength(event)}
          ></input>
          <br />
          Capital Letters:
        <input type="checkbox" checked onChange={this.handleCaps} />
        ( e.g. ABCDEFG )
          <br />
          Lower Case Letters:
        <input type="checkbox" checked onChange={this.handleLowerCase} />
        ( e.g. abcdefg )
          <br />
          Numbers:
        <input type="checkbox"  checked onChange={this.handleNumbers} />
        ( e.g. 123456 )
          <br />
          Ambiguous Characters:
        <input type="checkbox" onChange={this.handleAmbiguous} />
        ( e.g. !@#$% )
          <br />
          Similar Characters:
        <input type="checkbox" checked onChange={this.handleSimilar} />
        ( e.g. O01iLIl)
        </form>
      </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
