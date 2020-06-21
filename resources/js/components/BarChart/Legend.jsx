import { withStyles } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 6px'
    },
    bar: {
        width: 16,
        height: 6,
        borderRadius: 3,
        marginRight: 6,
        boxShadow: '0 0 4px #e3e3e3'
    },
    label: {
        fontSize: 12,
        fontWeight: '700'
    }
}

const Legend = ({ classes, color, label }) => {
    return (
        <div className={classes.container}>
            <span style={{ backgroundColor: color }} className={classes.bar} />
            <span className={classes.label}>{label}</span>
        </div>
    )
}

export default withStyles(styles)(Legend)
