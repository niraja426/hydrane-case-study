import React, { Component } from 'react'
import Thead from './Thead'
import Piechart from './PiechartPopulation'


export default class AllContinents extends Component {
    
    constructor(props){
        super(props)
        console.log("this is props from Allcontinents",this.props)
        this.state={
            selectedContinent:" ",
            selectAreaOrPopulation:" ",
            chart:5
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    getContinents=()=>{
        return this.props.data
          .map(element => element.continentName)
          .filter((continent, i, continents) => continents.indexOf(continent) === i)
          .sort();
      }
    render() {
        return (
            <>
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
                        <option value=" ">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>

                 </select>
                </div>
            </div>
            
            <div className="table-container table-wrapper-scroll-y my-custom-scrollbar ">
                
                <table className="table table table-bordered table-striped mb-0">
                    <Thead areaOrPopulation={this.state.selectAreaOrPopulation}/>  

                    {this.props.data
                    .filter(d=>{return(d.continentName.includes(this.state.selectedContinent))
                    })
                    .map((element)=>{
                        return(
                        <tr>
                            <td>{element.continentName}</td>
                            <td>{element.countryName}</td>
                            {(this.state.selectAreaOrPopulation==="Area" ||this.state.selectAreaOrPopulation===" ") && <td>{element.areaInSqKm}</td>}  
                                {(this.state.selectAreaOrPopulation==="Population"||this.state.selectAreaOrPopulation===" ") && <td>{element.population}</td>}  
                        </tr>
                        )

                    })}
                </table>
            </div>
            </>
        )
    }
}
