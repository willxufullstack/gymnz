import { withStyles } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'

const styles = {
    label: {
        flex: 1,
        textAlign: 'right',
        paddingRight: 12,
        color: '#8F8E8E',
        fontWeight: '400',
        fontSize: 12,
        position: 'relative',
        marginTop: -9
    },
    vr: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column-reverse'
    }
}

const YAxis = ({ classes, className, labels, style }) => {
    return (
        <div className={classNames(classes.vr, className)} style={style}>
            {labels.map((label, i) => (
                <span key={i} className={classes.label}>
                    {label || ''}
                </span>
            ))}
        </div>
    )
}

export default withStyles(styles)(YAxis)
