import React,{Component}from 'react';
import "bootstrap/dist/css/bootstrap.css";

import './App.css';
import Home from './Home';
import axios from 'axios'
import AllContinents from './AllContinents'


export default class App extends Component {
  constructor(){
    super()
    this.state={
      data:[]
    }
  }
  //Data fetch from API 
  handleSubmit=()=>{
    axios.get('http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane')
    .then(response=>{
      this.setState({
        data:response.data.geonames
      })
      console.log(this.state.data)
    })
    .catch(err=>console.log(err))

  }
  render(){
  return (
    <div className="App">
        <Home onOkSubmit={this.handleSubmit}/>
        <AllContinents data={this.state.data}/>
  </div>
  );
}
}

