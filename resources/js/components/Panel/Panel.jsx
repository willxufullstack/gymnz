import { withStyles } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'

const styles = {
    container: {
        border: '1px solid #ECECEC',
        background: '#fff',
        borderRadius: 12
    }
}

const Panel = ({ classes, children, flex, scroll, className }) => {
    let style = {}
    if (flex) {
        style = { ...style, flex: 1 }
    }
    if( scroll) {
        style = { ...style, overflow: 'scroll' }
    }
    return (
        <div className={classNames(classes.container, className)} style={style}>
            {children}
        </div>
    )
}

export default withStyles(styles)(Panel)
