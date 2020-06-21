import { withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import Panel from '../Panel/Panel'
import AreaChart from '../../views/Overview/AreaChart'
import OptionLabel from './OptionLabel'

const styles = {
    chart: {
        position: 'relative',
        display: 'inline-block',
        paddingLeft: 0,
        paddingTop: 16,
        flex: 1
    },
    chartTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 0 0 38px'
    },
    chartOptions: {
        display: 'flex'
    },
    chartTitle: {
        color: '#333',
        fontWeight: '400',
        fontSize: 20,
        flex: 1
    }
}

const LineChart = React.memo(({
    classes,
    title,
    defaultColumn,
    xTicker,
    options,
    data,
    width,
    height
}) => {
    const [currentColumn, switchColumn] = useState(defaultColumn)

    console.log(title)
    const current = data[Object.keys(data)[0]]
    const prev = data[Object.keys(data)[1]]

    const ascKeys = Object.keys(data).reverse()
    const xTickers = ascKeys.map(k => data[k][xTicker])

    const allPointers = {}
    Object.keys(options).forEach(key => {
        allPointers[key] = ascKeys.map((k, i) => ({
            x: i,
            y: data[k][key] || 0
        }))
    })

    const hintFormat = p => {
        return Object.keys(options).map(opt => {
            const found = allPointers[opt].find(r => r.x === p.x)
            return {
                title: options[opt],
                value: found ? found.y : '?'
            }
        })
    }
    return (
        <Panel className={classes.chart}>
            <div className={classes.chartTitleContainer}>
                <div className={classes.chartTitle}>{title}</div>
                <div className={classes.chartOptions}>
                    {Object.keys(options).map(opt => (
                        <OptionLabel
                            key={opt}
                            label={options[opt]}
                            value={current[opt]}
                            selected={currentColumn === opt}
                            direction={current[opt] >= prev[opt] ? 'up' : 'down'}
                            onClick={() => switchColumn(opt)}
                        />
                    ))}
                </div>
            </div>
            <AreaChart
                data={allPointers[currentColumn]}
                xTickers={xTickers}
                chartClassName={classes.yearChart}
                hintFormat={hintFormat}
                width={width? width : 360}
                height={height ? height: 200}
            />
        </Panel>
    )
})

export default withStyles(styles)(LineChart)
