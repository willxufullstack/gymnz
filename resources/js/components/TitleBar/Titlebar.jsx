import { withStyles } from '@material-ui/core'
import classNames from 'classnames'
import React from 'react'

const styles = {
    container: {
        display: 'flex',
        padding: '12px 0',
        alignItems: 'center',
        flex: 1
    },
    title: {
        display: 'inline-block',
        fontSize: 24,
        fontWeight: '900',
        color: '#333'
    },
    vr: {
        width: 8,
        height: 22,
        background: '#29aa99',
        display: 'inline-block',
        borderRadius: 4,
        marginRight: 24,
        boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);'
    }
}

const Titlebar = ({ classes, label, children, className, style }) => {
    return (
        <div className={classNames(className, classes.container)} style={style}>
            <span className={classes.vr} />
            <span className={classes.title}>{label}</span>
            {children}
        </div>
    )
}

export default withStyles(styles)(Titlebar)
