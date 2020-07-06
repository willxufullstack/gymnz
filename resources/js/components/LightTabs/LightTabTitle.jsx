import { withStyles } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
    },
    label: {
        color: '#999',
        minWidth: 80,
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '500',

        '&.active': {
            color: '#333',
            fontWeight: '900',
            fontSize: 16
        }
    },
    underline: {
        backgroundColor: '#333',
        visibility: 'hidden',
        height: 6,
        borderRadius: 3,
        width: 18,
        boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);',

        '&.active' : {
            visibility: 'visible',
        }
    }
}

const LightTabTitle = ({ classes, label, active }) => {
    return (
        <div className={classes.container}>
            <div className={classNames(classes.label, active && 'active')}>
                {label}
            </div>
            <span className={classNames(classes.underline, active && 'active')} />
        </div>
    )
}

export default withStyles(styles)(LightTabTitle)
