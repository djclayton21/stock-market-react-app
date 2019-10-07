import React, { Component }from 'react';
import {VictoryChart, VictoryLine, VictoryAxis } from 'victory'

class DetailChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineData:[],
            candleData: []
        }
    }
    componentDidMount(){
        const fullLineData = this.props.priceHistory.map(entry => ({date: new Date(entry.date), close: entry.close}))
        const newLineData = fullLineData.slice(fullLineData.length - 365)
        this.setState({
            lineData: newLineData
        })
    }
    render() { 
        const lineStyle = {
            data: {
                stroke: '#1b90d8'
            }
        }
        const axisStyle = {
            axis: {
                stroke: '#EBF5F5'
            },
            ticks: {
                stroke: '#EBF5F5'
            },
            tickLabels: {
                stroke: '#EBF5F5',
                fill: '#EBF5F5'   
            }
        }
        const { lineData } = this.state
        return (
            <>
                {lineData.length &&
                    <div className="chart-container">
                        <VictoryChart scale = {{x: 'time', y:'linear'}} >
                            <VictoryAxis style = {axisStyle} tickFormat= {(x) => (`${x.getMonth()}-${x.getFullYear()}`)}/>
                            <VictoryAxis style = {axisStyle} dependentAxis tickFormat= {(x) => (`$${x}`)}/>
                            <VictoryLine style = {lineStyle} data= {lineData} x= "date" y= "close" scale= {{x: 'time', y: 'linear'}} animate = {{duration:3000}}/>
                        </VictoryChart>
                    </div>
                }
            </>
        );
    }
}
export default DetailChart;