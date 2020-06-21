import { withStyles } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'
import DirectionIcon from '../DirectionIcon/DirectionIcon'

const styles = {
    container: {
        flex: 1,
        cursor: 'pointer',
        minWidth: 72,
        display: 'flex',
        flexDirection: 'column'
    },
    label: {
        color: '#333',
        fontSize: 10,
        lineHeight: '16px',
        fontWeight: '500'
    },
    value: {
        color: '#515151',
        fontSize: 16,
        fontWeight: '700'
    },
    unselected: {
        filter: 'opacity(0.5)'
    }
}

const OptionLabel = ({
    classes,
    label,
    value,
    direction,
    selected,
    onClick
}) => {
    return (
        <div
            onClick={onClick}
            className={classNames(
                classes.container,
                !selected && classes.unselected
            )}
        >
            <div className={classes.label}>{label}</div>
            <div className={classes.value}>
                {value} {direction && <DirectionIcon direction={direction} size={32} />}
            </div>
        </div>
    )
}

export default withStyles(styles)(OptionLabel)
