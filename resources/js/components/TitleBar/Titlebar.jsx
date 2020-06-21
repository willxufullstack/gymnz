import { withStyles } from '@material-ui/core'
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
        boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.15)'
    }
}

const Titlebar = ({ classes, label }) => {
    return (
        <div className={classes.container}>
            <span className={classes.vr} />
            <span className={classes.title}>{label}</span>
        </div>
    )
}

export default withStyles(styles)(Titlebar)
