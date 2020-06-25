import { withStyles } from '@material-ui/core'
import React from 'react'
import Panel from '../Panel/Panel'
import BarChart from './BarChart'
import DirectionIcon from '../DirectionIcon/DirectionIcon'

const styles = {
    chart: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: '12px 24px',
        flex: 1,
        width: '100%'
    },
    chartTitleContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 8
    },
    chartCategoryTitle: {
        color: '#999',
        fontWeight: '500',
        fontSize: 12,
        flex: 1
    },
    chartValueTitle: {
        fontSize: 22,
        color: '#515151',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        lineHeight: '22px',
        position: 'relative',
        top: -4
    }
}

const BarChartPanel = ({ classes, title, colors, data, xLabels, legends, unit }) => {
    const currentValue = !data.length ? 0 :  Math.max(...data[data.length - 1])
    const prevValue = !data.length ? 0 : Math.max(...data[data.length - 2])
    const direction = currentValue >= prevValue ? 'up' : 'down'
    return (
        <Panel className={classes.chart}>
            <div className={classes.chartTitleContainer}>
                <div className={classes.chartCategoryTitle}>{title}</div>
                <div className={classes.chartValueTitle}>
                    {currentValue} {unit} <DirectionIcon size={36} direction={direction} />{' '}
                </div>
            </div>
            <BarChart colors={colors} data={data} xLabels={xLabels} legends={legends} />
        </Panel>
    )
}

export default withStyles(styles)(BarChartPanel)
