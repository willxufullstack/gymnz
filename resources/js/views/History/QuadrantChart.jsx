import React from 'react'
import {XYPlot, XAxis, YAxis, MarkSeries, DiscreteColorLegend, ContinuousSizeLegend, Hint} from 'react-vis';

class QuadrantChart extends React.Component {
    render() {
        const MARGIN = {
            left: this.props.margin,
            right: this.props.margin,
            bottom: this.props.margin,
            top: this.props.margin
        }
        const top = this.props.height/2
        const left = top - this.props.margin/2
        const legends = this.props.legends ? this.props.legends : []
        const sizeRange = this.props.sizeRange ? this.props.sizeRange: [4, 14]
        const strokeWidthRange=this.props.strokeWidthRange ? this.props.strokeWidthRange: [sizeRange[0]/3, sizeRange[1]/3]
        const colorRange = this.props.colorRange ? this.props.colorRange : ['#8e24aa', '#f48024', '#aaa', '#4fd2c2', '#999', 'red']
        return (<div style={{position: 'relative', top: -6}}>
                <div style={{position: 'absolute', top: 12, margin: 'auto',textAlign: 'center', color:'#333', fontWeight:'700', fontSize: 12, width: this.props.width + this.props.margin}}>{this.props.title}</div>
                <XYPlot colorRange={colorRange} margin={MARGIN} xDomain={this.props.xRange} yDomain={this.props.yRange} width={this.props.width + this.props.margin} height={this.props.height}>
                <XAxis top={top} hideTicks/>
                <XAxis title={this.props.xTitle} />
                <YAxis left={left}  hideTicks/>
                <YAxis title={this.props.yTitle} />
                <MarkSeries
                    data={this.props.dataSet}
                    sizeRange={sizeRange}
                    strokeWidthRange={strokeWidthRange}
                    colorType="literal"
                    strokeType="literal"
                    strokeWidth={3}
                    opacityType="literal"
                    onValueClick={this.props.onValueClick}
                    onValueMouseOver={this.props.onHover}
                    onValueMouseOut={this.props.onBlur}
                />
                {this.props.hint}
            </XYPlot>
            {Object.keys(legends).length> 0 && <div style={{display: 'flex'}}>
                <DiscreteColorLegend
                        colors={Object.keys(legends)}
                        style={{display:'inline-block', position: 'relative', left: this.props.margin}}
                        orientation="horizontal"
                        width={this.props.width/2}
                        items={Object.values(legends).map( (l,i) => ({strokeWidth: 13, title: l,  color: colorRange[i]}))}
                    />
                <div style={{position: 'relative', paddingTop: 6, paddingLeft: this.props.margin, display:'inline-block'}}>
                    <ContinuousSizeLegend width={this.props.width/3}  startSize={sizeRange[0]} endSize={24} circlesTotal={6} startTitle="12次" endTitle="42次" />
                </div>
            </div>}
            </div>)
    }
}
// `url(#stripes-${i})`

export default QuadrantChart
