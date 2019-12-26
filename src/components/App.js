import React,{Component}from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Home from './Home';
import axios from 'axios'
import AllContinents from './AllContinents'
import Piechart from './Piechart';
import Footer from './Footer';


export default class App extends Component {
  constructor(){
    super()
    this.state={
      isLoading:false,
      data:[],
      selectedContinent:"All",
      selectAreaOrPopulation:"All",
      chart:5,
      filteredData:[],
      sort:true //ascending

    }
  }
  //Data fetch from API 
  handleSubmit=()=>{
    axios.get('http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane')
    .then(response=>{
      this.setState({
        data:response.data.geonames,
        isLoading:!this.state.isLoading,
        filteredData:response.data.geonames
      })
      console.log(this.state.data)
    })
    .catch(err=>console.log(err))

  }

  handleContinentChange=(e)=>{
    const result = (e.target.value==="All")?this.state.data:this.state.data.filter(f => f.continentName===e.target.value)
    this.setState({
         selectedContinent:e.target.value,
         filteredData:result
      
    })
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
  handleClick=(e)=>{
    var sortby=e.target.id
    var ret1 = (this.state.sort)? 1:-1
    var ret2 = (this.state.sort)? -1:1
    console.log(sortby,this.state.filteredData)
    var sorted=this.state.filteredData.sort((a,b)=>{
      if(a[sortby]>b[sortby]) return ret1;
      else if(a[sortby]<b[sortby]) return ret2;
      else return 0
    })
    this.setState({
      sort:!this.state.sort,
      filterdData:sorted
    })
    console.log("sorted", this.state.sort, this.state.filteredData)
    }
  render(){
  return (

    <div className="App">
        <Home onOkSubmit={this.handleSubmit}/>

        <div className="filters-container">
                <div className="filter">
                 <label>Filter by Continents</label>
                        <select name="selectedContinent" value={this.state.selectedContinent} onChange={this.handleContinentChange}>
                             <option value="All">All Continents</option>
                                {this.getContinents().map(continent => (<option key={continent} value={continent}>{continent}</option> ))}
                        </select>
                </div>

                <div className="filter">
                <label>Filter by Population/Area</label>
                <select name="selectAreaOrPopulation" value={this.state.selectAreaOrPopulation} onChange={this.handleChange}>
                        <option value="All">All</option>
                        <option value="Area">Area</option>
                        <option value="Population">Population</option>
                 </select>
                </div>

                <div className="filter">
                <label>Chart max result</label>
                <select name="chart" value={this.state.chart} onChange={this.handleChange}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>

                 </select>
                </div>

            </div>

      {(this.state.isLoading)&&<Piechart 
              data={this.state.filteredData} 
              chart={this.state.chart} 
              areaOrPop={this.state.selectAreaOrPopulation}
              selectedContinent={this.state.selectedContinent}
              selectAreaOrPopulation={this.state.selectAreaOrPopulation}
              loading={this.state.isLoading}
            />}
           

        <div className="table-container table-wrapper-scroll-y my-custom-scrollbar ">
                
          <table className="table table table-bordered table-striped mb-0">
            
            {(!this.state.isLoading)?null:
                    <thead>
                        <tr>
                                <th id="continentName" onClick={this.handleClick}scope="col">Continent &#9650;</th>
                                <th id="countryName" onClick={this.handleClick} scope="col">Country &#9660; &#9650;</th>
                                 {(this.state.selectAreaOrPopulation==="Area" || this.state.selectAreaOrPopulation==="All") && <th onClick={this.handleClick} id="areaInSqKm" scope="col">Area &#9650;</th>}
                                {(this.state.selectAreaOrPopulation==="Population" || this.state.selectAreaOrPopulation==="All") && <th  onClick={this.handleClick} id="population" scope="col">Population &#9650;</th> }                              
                        </tr>
                    </thead>  
                }
        
        <AllContinents 
            data={this.state.filteredData} 
            selectedContinent={this.state.selectedContinent} 
            selectAreaOrPopulation={this.state.selectAreaOrPopulation}
            loading={this.state.isLoading}
          />

                <Footer
                loading={this.state.isLoading}
                data={this.state.filteredData}
                selectedAreaOrPopulation={this.state.selectAreaOrPopulation}/>
            </table>
          </div>
  </div>
  );
}
}

