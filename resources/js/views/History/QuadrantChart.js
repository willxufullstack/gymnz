import React from 'react'
import {XYPlot, XAxis, YAxis, MarkSeries, DiscreteColorLegend, ContinuousSizeLegend} from 'react-vis';

class QuadrantChart extends React.Component {
    render() {
        const MARGIN = {
            left: this.props.margin,
            right: this.props.margin,
            bottom: this.props.margin,
            top: this.props.margin
        }
        const top = (this.props.width + this.props.margin) / 2
        const left = top - this.props.margin
        const legends = this.props.legends ? this.props.legends : []
        const sizeRange = this.props.sizeRange ? this.props.sizeRange: [4, 12]
        const colorRange = this.props.colorRange ? this.props.colorRange : ['#8e24aa', '#f48024', '#aaa']
        return (<div>
                <XYPlot colorRange={colorRange} margin={MARGIN} xDomain={this.props.xRange} yDomain={this.props.yRange} width={this.props.width + this.props.margin} height={this.props.width}>

                <XAxis top={top} hideTicks/>
                <XAxis title={this.props.xTitle} />
                <YAxis left={left}  hideTicks/>
                <YAxis title={this.props.yTitle} />
                {this.props.dataSet.map((dataGroup, i) =>
                    <MarkSeries
                        key={colorRange[i]}
                        data={dataGroup}
                        opacity={1}
                        sizeRange={sizeRange}
                        opacityType="linear"
                        onValueClick={this.props.onValueClick}
                        color={colorRange[i]}
                    />
                )}
            </XYPlot>
            {/* <div>
            <svg height={0} width={0}>
                <GradientDefs>
                    {colorRange.map((color, i) => <pattern keyid={'stripes-' + i} width="4" height="4" patternUnits="userSpaceOnUse">
                            <path d="M 0, 0 l 5, 5" stroke={color} strokeLinecap="square" />
                        </pattern>)
                    }
                </GradientDefs>
            </svg>
            </div> */}
            <div style={{display: 'flex'}}>
                <DiscreteColorLegend
                        colors={colorRange}
                        style={{display:'inline-block', position: 'relative', left: this.props.margin}}
                        orientation="horizontal"
                        width={this.props.width/2}

                        items={legends.map( (l,i) => ({strokeWidth: 13, title: l,  color: colorRange[i]}))}
                    />
                <div style={{position: 'relative', paddingTop: 6, paddingLeft: this.props.margin, display:'inline-block'}}>
                    <ContinuousSizeLegend width={this.props.width/3}  startSize={sizeRange[0]} endSize={18} circlesTotal={8} startTitle="12次" endTitle="36次" />
                </div>
            </div>
            </div>)
    }
}
// `url(#stripes-${i})`

export default QuadrantChart
