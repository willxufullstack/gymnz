import { withStyles } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'

const styles = {
    hr: {
        width: '100%',
        height: '100%',
        borderTop: '1px dotted #D3D3D3'
    }
}

const YGrid = ({ classes, className }) => {
    return <div className={classNames(classes.hr, className)} />
}

export default withStyles(styles)(YGrid)