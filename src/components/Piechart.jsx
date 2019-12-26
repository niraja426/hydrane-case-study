import {Pie} from 'react-chartjs-2'
import React, { Component } from 'react'

export default class Piechart extends Component {

getSlice=()=>{
    var sorted=this.props.data.slice(0,this.props.chart)
    var remaining=this.props.data.slice(this.props.chart+1,this.props.data.length) 
    var sumPopulation=remaining.reduce((a,i)=>{
        return a+Number(i.population)

    },0)
    var sumArea=remaining.reduce((a,i)=>{
        return a+Number(i.areaInSqKm)

    },0)
    var others={}
    others.countryName="others"
    others.population=sumPopulation.toString()
    others.areaInSqKm=sumArea.toString()
    sorted.push(others)
    return sorted
}
   
getLabels=()=>{
   var sorted=this.getSlice()
    var labels= sorted.map((s)=>{
        return s.countryName
    })
    return labels
   
}
getPopulation=()=>{
    var sorted=this.getSlice()
    var sorteddata=sorted.map((s)=>{
        return s.population
    })
    console.log(sorteddata)
   return sorteddata
}
getArea=()=>{
    var sorted=this.getSlice()
    var sorteddata=sorted.map((s)=>{
        return s.areaInSqKm
    })
   return sorteddata
}
getColors=(chart)=>{
    var colors=["red","yellow","green","blue","purple","aqua","brown","lightgreen","indigo","lightpink","magenta","silver","fuchsia","darkorange","darkgreen","darksalmon","gold","darkorchid","beige","darkolivegreen"]
    return colors.slice(0,chart+1)   
}

    render() {
        return (
            <div className="piechart-container">
            {(this.props.areaOrPop==="All"||this.props.areaOrPop==="Population") &&(
                        <div className="piechart">
                            {(!this.props.loading)?null:<h3> Country Population</h3>}
                               <Pie
                                    data={{
                                        labels:this.getLabels(),
                                         datasets:[{
                                            data:this.getPopulation(),
                                            backgroundColor:this.getColors(this.props.chart)}]
                                    }}
                                    height='80%'/>
                        </div>)}

                       

                        {(this.props.areaOrPop==="All"||this.props.areaOrPop==="Area") &&(
                        <div className="piechart">
                            {(!this.props.loading)?null:<h3> Country Population</h3>}
                               <Pie
                                    data={{
                                        labels:this.getLabels(),
                                         datasets:[{
                                            data:this.getArea(),
                                            backgroundColor:this.getColors(this.props.chart)}]
                                    }}
                                    height='80%'/>
                        </div>)}
             

            </div>
        )
    }
}

