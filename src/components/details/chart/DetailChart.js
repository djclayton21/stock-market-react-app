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
        const { lineData } = this.state
        return (
            <>
                {lineData.length &&
                    <div className="detail-chart">
                        <VictoryChart scale= {{x: 'time', y:'linear'}} >
                            <VictoryAxis tickFormat= {(x) => (`${x.getMonth()}-${x.getFullYear()}`)}/>
                            <VictoryAxis dependentAxis tickFormat= {(x) => (`$${x}`)}/>
                            <VictoryLine data= {lineData} x= "date" y= "close" scale= {{x: 'time', y: 'linear'}}/>
                        </VictoryChart>
                    </div>
                }
            </>
        );
    }
}
export default DetailChart;