import React, {Component} from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'


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
    openOptions: false, 
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

  toggleUp = () => {
    console.log('test');
    this.setState({
      openOptions: !this.state.openOptions
    })
  }

  toggleClose = () => {
    this.setState({
      openOptions: !this.state.openOptions
    })
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
      <h2 onClick={this.toggleUp} className="form"> Options </h2>
        <Menu open={this.state.openOptions} className="form">
          <MenuItem style={{ fontFamily: 'test', color: '#ababab', }}>
          Password Length:
        <input
              name="Password Length"
              type="number"
              min="4" max="30"
              placeholder="8"
              onChange={(event) => this.changeLength(event)}
            ></input>
            </MenuItem>
          <MenuItem style={{ fontFamily: 'test', color: '#ababab', }}>
          Capital Letters:
        <input type="checkbox" checked onChange={this.handleCaps} />
            ( e.g. ABCDEFG )
            </MenuItem>
          <MenuItem style={{ fontFamily: 'test', color: '#ababab', }}> 
          Lower Case Letters:
        <input type="checkbox" checked onChange={this.handleLowerCase} />
            ( e.g. abcdefg )
            </MenuItem>
          <MenuItem style={{ fontFamily: 'test', color: '#ababab', }}> 
          Numbers:
        <input type="checkbox" checked onChange={this.handleNumbers} />
            ( e.g. 123456 )
            </MenuItem>
          <MenuItem style={{ fontFamily: 'test', color: '#ababab', }}>
          Ambiguous Characters:
        <input type="checkbox" onChange={this.handleAmbiguous} />
            ( e.g. !@#$% )
            </MenuItem>
          <MenuItem style={{ fontFamily: 'test', color: '#ababab', }}>
          Similar Characters:
        <input type="checkbox" checked onChange={this.handleSimilar} />
            ( e.g. O01iLIl)
            </MenuItem>
          <MenuItem onClick={this.toggleClose} style={{ fontFamily: 'test', color: '#ababab', }}>Close</MenuItem>
      </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(App);
