import React, { Component } from 'react'
import Thead from './Thead'
import Piechart from './Piechart'


export default class AllContinents extends Component {
      
  
   
    render() {
        return (
            <div className="table-container table-wrapper-scroll-y my-custom-scrollbar ">
                
                <table className="table table table-bordered table-striped mb-0">
                 {(!this.props.loading)?null:
                    <thead>
                        <tr>
                                <th scope="col">Continent</th>
                                <th onClick={this.handleClick} scope="col">Country </th>
                                 {(this.props.selectedAreaOrPopulation==="Area" || this.props.selectAreaOrPopulation===" ") && <th scope="col">Area</th>}
                                {(this.props.selectAreaOrPopulation==="Population" || this.props.selectAreaOrPopulation===" ") && <th scope="col">Population</th> }                              
                        </tr>
                    </thead>  
                }


                    {this.props.data
                    .map((element)=>{
                        return(
                        <tr>
                            <td>{element.continentName}</td>
                            <td>{element.countryName}</td>
                            {(this.props.selectAreaOrPopulation==="Area" ||this.props.selectAreaOrPopulation===" ") && <td>{element.areaInSqKm}</td>}  
                            {(this.props.selectAreaOrPopulation==="Population"||this.props.selectAreaOrPopulation===" ") && <td>{element.population}</td>}  
                        </tr>
                        )

                    })}
                </table>
            </div>
        )
    }
}
