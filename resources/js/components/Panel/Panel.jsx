import { withStyles } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'

const styles = {
    container: {
        overflow: 'hidden',
        border: '1px solid #f3f3f3',
        background: '#fff',
        borderRadius: 12
    }
}

const Panel = ({ classes, children, flex, scroll, className, style }) => {
    let defaultStyle = {}
    if (flex) {
        defaultStyle = { ...defaultStyle, flex: 1 }
    }
    if( scroll) {
        defaultStyle = { ...defaultStyle, overflow: 'scroll' }
    }

    return (
        <div className={classNames(classes.container, className)} style={{...defaultStyle, ...style}}>
            {children}
        </div>
    )
}

export default withStyles(styles)(Panel)
