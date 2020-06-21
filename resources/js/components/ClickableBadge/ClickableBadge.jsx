import { withStyles, Tooltip } from '@material-ui/core'
import React from 'react'

const styles = {
    container: {
        cursor: 'pointer',
        display: 'inline-block',
        padding: '0px 4px 0px 8px',
        border: '1px solid #000',
        borderRadius: 18,
        display: 'flex',
        height: 22,
        alignItems: 'center'
    },
    label: {
        fontSize: 12,
        fontWeight: 400
    },
    number: {
        width: 16,
        height: 16,
        display: 'inline-block',
        textAlign: 'center',
        color: '#fff',
        background: '#000',
        borderRadius: '50%',
        fontSize: 10,
        fontWeight: 900,
        lineHeight: '16px',
        marginLeft: 6
    }
}

const ClickableBadge = ({
    classes,
    color,
    label,
    number,
    selected,
    onClick,
    tooltip
}) => {
    const containerUnselectedStyle = {
        color,
        borderColor: color,
        boxShadow: `0px 4px 12px ${color + '40'}` // 25% alpha  https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
    }
    const containerSelectedStyle = {
        borderColor: color,
        backgroundColor: color,
        color: '#fff',
        boxShadow: `0px 4px 12px ${color + '40'}`
    }

    const numberStyle = {
        background: selected ? '#fff' : color,
        color: selected ? color : '#fff'
    }


    return (
        <Tooltip title={tooltip || ''}>
            <div
                onClick={() => onClick && onClick()}
                className={classes.container}
                style={
                    selected ? containerSelectedStyle : containerUnselectedStyle
                }
            >
                <span className={classes.label}>{label}</span>
                {number !== undefined && (
                    <span className={classes.number} style={numberStyle}>
                        {number}
                    </span>
                )}
            </div>
        </Tooltip>
    )
}

export default withStyles(styles)(ClickableBadge)
