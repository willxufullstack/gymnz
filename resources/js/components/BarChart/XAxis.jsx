import { withStyles } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'

const styles = {
    label: {
        flex: 1,
        textAlign: 'center',
        color: '#8F8E8E',
        fontWeight: '400',
        fontSize: 12
    },
    hr: {
        width: '100%',
        display: 'flex',
        paddingTop: 8
    }
}

const XAxis = ({ classes, className, height, labels, unitWidth = 8 }) => {
    // const step = labels.length / 6
    return (
        <div
            style={{ minHeight: height }}
            className={classNames(classes.hr, className)}
        >
            {labels.map((label, i) => (
                <span key={i} className={classes.label}>
                    {label}
                </span>
            ))}
        </div>
    )
}

export default withStyles(styles)(XAxis)
