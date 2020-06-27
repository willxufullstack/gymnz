import { withStyles } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'
import Panel from '../Panel/Panel'

const styles = {
    panel: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        borderRadius: 24,
        minWidth: 96,
        marginLeft: 12,
        height: 40
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 8
    },
    circle: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        borderWidth: 6,
        borderStyle: 'solid',

        '&.green': {
            backgroundColor: '#89ECC2',
            borderColor: '#E1F3EC'
        },
        '&.red': {
            backgroundColor: '#FF8C8C',
            borderColor: '#FFDFDF'
        },
        '&.purple': {
            backgroundColor: '#B196FF',
            borderColor: '#E8E0FF'
        },
        '&.yellow': {
            backgroundColor: '#FFC56D',
            borderColor: '#FFF0D9'
        },
    },
    label: {
        fontSize: 10,
        color: '#aaa',
        lineHeight: '12px',
        fontWeight: '500'
    },
    value: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        lineHeight: '20px'
    }

}

const DotBadge = ({ classes, color = 'green', label, value }) => {
    return <Panel className={classes.panel}>
        <div className={classNames(classes.circle, color)}></div>
        <div className={classes.textContainer}>
            <span className={classes.label}>{label}</span>
            <span className={classes.value}>{value}</span>
        </div>
    </Panel>
}

export default withStyles(styles)(DotBadge)
