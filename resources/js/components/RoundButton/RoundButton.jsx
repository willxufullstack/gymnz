import { withStyles } from '@material-ui/core'
import React from 'react'
import classNames from 'classnames'

const styles = {
    container: {
        border: '1px solid #ECECEC',
        background: '#fff',
        borderRadius: 100,
        cursor: 'pointer',

        '&:hover': {
            boxShadow:
                '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)'
        }
    }
}

const RoundButton = ({
    classes,
    className,
    variant,
    label,
    color,
    onClick,
    disabled,
    shadow,
    extend = 0,
    fontSize = 14,
    style = {}
}) => {
    const defaultStyle = {
        color: variant ? color : '#fff',
        backgroundColor: variant ? 'transparent' : color,
        border: `1px solid ${variant === 'text' ? 'transparent' : color}`,
        padding: `${fontSize * 0.1}px ${12 + extend}px`,
        display: 'flex',
        fontWeight: '700',
        fontSize: `${fontSize}px`,
        lineHeight: `${fontSize * 1.55}px`,
        opacity: disabled ? 0.5 : 1
    }

    if (shadow) {
        defaultStyle['boxShadow'] = '0px 4px 12px rgba(41, 170, 153, 0.5)'
    }

    return (
        <div
            className={classNames(classes.container, className)}
            style={{ ...style, ...defaultStyle }}
            onClick={e => !disabled && onClick(e)}
        >
            {label}
        </div>
    )
}

export default withStyles(styles)(RoundButton)
