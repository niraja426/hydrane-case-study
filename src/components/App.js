import React,{Component}from 'react';
import "bootstrap/dist/css/bootstrap.css";

import './App.css';
import Home from './Home';
import axios from 'axios'
import AllContinents from './AllContinents'
import Piechart from './Piechart';


export default class App extends Component {
  constructor(){
    super()
    this.state={
      isLoading:false,
      data:[],
      selectedContinent:" ",
      selectAreaOrPopulation:" ",
      chart:5

    }
  }
  //Data fetch from API 
  handleSubmit=()=>{
    axios.get('http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane')
    .then(response=>{
      this.setState({
        data:response.data.geonames,
        isLoading:!this.state.isLoading
      })
      console.log(this.state.data)
    })
    .catch(err=>console.log(err))

  }

  handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}

getContinents=()=>{
    return this.state.data
      .map(element => element.continentName)
      .filter((continent, i, continents) => continents.indexOf(continent) === i)
      .sort();
  }
  render(){
  return (

    <div className="App">
        <Home onOkSubmit={this.handleSubmit}/>

        <div className="filters-container">
                <div className="filter">
                 <label>Filter by Continents</label>
                        <select name="selectedContinent" value={this.state.selectedContinent} onChange={this.handleChange}>
                             <option value="">All Continents</option>
                                {this.getContinents().map(continent => (<option key={continent} value={continent}>{continent}</option> ))}
                        </select>
                </div>

                <div className="filter">
                <label>Filter by Population/Area</label>
                <select name="selectAreaOrPopulation" value={this.state.selectAreaOrPopulation} onChange={this.handleChange}>
                        <option value=" ">All</option>
                        <option value="Area">Area</option>
                        <option value="Population">Population</option>
                 </select>
                </div>

                <div className="filter">
                <label>Filter by Chart</label>
                <select name="chart" value={this.state.chart} onChange={this.handleChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>

                 </select>
                </div>

                
            </div>
      
           <Piechart 
              data={this.state.data} 
              chart={this.state.chart} 
              areaOrPop={this.state.selectAreaOrPopulation}
              selectedContinent={this.state.selectedContinent}
              selectAreaOrPopulation={this.state.selectAreaOrPopulation}
              loading={this.state.isLoading}
            />


        <AllContinents 
            data={this.state.data} 
            selectedContinent={this.state.selectedContinent} 
            selectAreaOrPopulation={this.state.selectAreaOrPopulation}
            loading={this.state.isLoading}
          />
  </div>
  );
}
}

