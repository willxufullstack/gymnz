import { withStyles } from '@material-ui/core'
import React from 'react'
import YGrid from './YGrid'
import YAxis from './YAxis'
import XAxis from './XAxis'
import Bar from './Bar'
import Legend from './Legend'

const styles = {
    panel: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    container: {
        minHeight: 160,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridColumnGap: 0,
        gridRowGap: 0,
        width: '100%',
        height: '100%'
    },
    bg: {
        gridArea: '1 / 1 / 5 / 5',
        display: 'flex',
        width: '100%'
    },
    bars: {
        gridArea: '1 / 1 / 5 / 5',
        display: 'flex'
    },
    yAxis: {
        width: 30
    },
    yGrids: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    legendContainer: {
        display: 'flex'
    }
}

const BarChart = ({
    classes,
    data,
    xLabels,
    colors,
    legends,
    maxY,
    minY = 0,
    yAxisWidth = 36,
    xAixsHeight = 30
}) => {
    const rowCount = 4

    const yGrids = []
    for (let i = 0; i < rowCount; i++) {
        yGrids.push(<YGrid key={i} />)
    }

    const maxes = data.map(items =>
        Math.max(...items)
    )
    const maxYAxis = maxY ? maxY : Math.max(...maxes)
    const minYAxis = minY
    const yUnit = minY + Math.ceil((maxYAxis - minYAxis) / 4)
    const yAxisLabels = []
    for (let i = 0; i <= 4; i++) {
        yAxisLabels[i] = i * yUnit
    }

    const bars = data.map((row, i) => (
        <Bar
            key={i}
            data={row}
            isLast={i === data.length - 1}
            colors={colors}
            max={maxYAxis}
        />
    ))

    return (
        <div className={classes.panel}>
            <div className={classes.container}>
                <div className={classes.bg}>
                    <YAxis
                        className={classes.yAxis}
                        labels={yAxisLabels}
                        style={{ width: yAxisWidth }}
                    />
                    <div className={classes.yGrids}>
                        {yGrids}
                        <XAxis height={xAixsHeight} labels={xLabels} />
                    </div>
                </div>
                <div
                    className={classes.bars}
                    style={{
                        paddingLeft: yAxisWidth,
                        paddingBottom: xAixsHeight
                    }}
                >
                    {bars}
                </div>
            </div>
            <div className={classes.legendContainer}>
                {legends.map((label,i) => <Legend key={i} color={colors[i]} label={label} />)}
            </div>
        </div>
    )
}

export default withStyles(styles)(BarChart)
