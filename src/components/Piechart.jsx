import {Pie} from 'react-chartjs-2'
import React, { Component } from 'react'

export default class Piechart extends Component {

getSlice=()=>{
    var sorted=this.props.data.slice(0,this.props.chart)
    return sorted
}
   
getLabels=()=>{
   var sorted=this.getSlice()
    var labels= sorted.map((s)=>{
        return s.countryName
    })
    return labels
   
}
getPopulation=(chart)=>{
    var sorted=this.getSlice()
    var sorteddata=sorted.map((s)=>{
        return s.population
    })
   return sorteddata
}
getArea=(chart)=>{
    var sorted=this.getSlice()
    var sorteddata=sorted.map((s)=>{
        return s.areaInSqKm
    })
   return sorteddata
}
getColors=(chart)=>{
    var colors=["red","yellow","green","blue","purple","aqua","brown","lightgreen","indigo","lightpink","magenta","silver","fuchsia","darkorange","darkgreen","darksalmon","gold","darkorchid","beige","darkolivegreen"]
    return colors.slice(0,chart)   
}

    render() {
        return (
            <div>
           
            {this.props.areaOrPop==="All" &&(
                 <div className="piechart-container">
                        <div className="piechart">
                            {(!this.props.loading)?null:<h3> Country Population</h3>}
                               <Pie
                                    data={{
                                        labels:this.getLabels(this.props.chart),
                                        datasets:[{
                                            data:this.getPopulation(this.props.chart),
                                            backgroundColor:this.getColors(this.props.chart)}]
                                    }}
                                    height='80%'/>
                        </div>

                         <div className="piechart">
                         {(!this.props.loading)?null:<h3> Country Area</h3>}
                                <Pie
                                    data={{
                                        labels:this.getLabels(this.props.chart),
                                        datasets:[{
                                            data:this.getArea(this.props.chart),
                                            backgroundColor:this.getColors(this.props.chart)}]
                                    }}
                                    height='80%'/>
                         </div>
             </div>) 
            || ((this.props.areaOrPop==="Area" )&& 
                    (<div className="piechart">
                        <h3> Country Area</h3>
                          <Pie
                                data={{
                                    labels:this.getLabels(this.props.chart),
                                    datasets:[{
                                        data:this.getArea(this.props.chart),
                                        backgroundColor:this.getColors(this.props.chart)}]
                                }}
                                height='80%'
                            />
                    </div>))
            ||((this.props.areaOrPop==="Population")&& 
               (<div className="piechart">
                     <h3> Country Population</h3>
                     <Pie
                            data={{
                            labels:this.getLabels(this.props.chart),
                            datasets:[{
                            data:this.getPopulation(this.props.chart),
                            backgroundColor:this.getColors(this.props.chart)}]
                        }}
                    height='80%'
                    />
                </div>)
)}
            </div>
        )
    }
}

