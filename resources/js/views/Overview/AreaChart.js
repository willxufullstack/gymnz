import React from 'react'
import * as utils from '-utils'
import {
    XYPlot,
    XAxis,
    YAxis,
    AreaSeries,
    HorizontalGridLines,
    LineMarkSeries,
    GradientDefs,
    Hint
  } from 'react-vis'


export default class AreaChart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            current: null
        }
    }
    getYDomainSet = (data) => {
        const valueSet = data.map(d => d.y)
        return utils.getRange(valueSet)
    }
    toggle = () => {
        this.props.toggle()
    }

    _onHover = (v) => {
        this.setState({current: v})

    }
    _onBlur = () => this.setState({current: null})

    render(){
        const {data, yTitle, xTickers, chartClassName, hintFormat} = this.props
        const yDomain=this.getYDomainSet(data)
        return (<XYPlot margin={{right: 30}} width={700} height={200} yDomain={yDomain} className={chartClassName}>
                    <XAxis tickSize={2} tickFormat={v => xTickers[v]} />
                    <HorizontalGridLines tickTotal={5} style={{strokeDasharray:"2"}}/>
                    <YAxis tickSize={2} tickTotal={5} title={yTitle}/>
                    <GradientDefs>
                        <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#8e24aa" stopOpacity={0.3}/>
                        <stop offset="80%" stopColor="#8e24aa" stopOpacity={0.05} />
                        <stop offset="100%" stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                    </GradientDefs>
                    <AreaSeries
                        color={'url(#CoolGradient)'}
                        data={data}
                    />
                    <LineMarkSeries
                        lineStyle={{
                            strokeWidth: '2px',
                            stroke: '#8e24aa'
                        }}
                        markStyle={{
                            stroke: 'rgba(141,44,168, 0.4)',
                            strokeWidth: '6px',
                            fill: '#8e24aa',
                        }}
                        onValueMouseOver={this._onHover}
                        onValueMouseOut={this._onBlur}
                        data={data}
                    />
                    {this.state.current ? <Hint value={this.state.current} format={hintFormat} /> : null}
                </XYPlot>)

    }
}