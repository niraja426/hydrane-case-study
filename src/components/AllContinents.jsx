import React, { Component } from 'react'
import Thead from './Thead'
import Piechart from './Piechart'


export default class AllContinents extends Component {
    
    constructor(props){
        super(props)
    }
   
    render() {
        return (
            <div className="table-container table-wrapper-scroll-y my-custom-scrollbar ">
                
                <table className="table table table-bordered table-striped mb-0">
                 {(!this.props.loading)?null:<Thead areaOrPopulation={this.props.selectAreaOrPopulation}/>  }

                    {this.props.data
                    .filter(d=>{return(d.continentName.includes(this.props.selectedContinent))
                    })
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
