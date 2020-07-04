import { withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import classNames from 'classnames'

const styles = {
    container: {
        border: '1px solid #d3d3d3',
        background: '#fcfcfc',
        borderRadius: 100,
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        lineHeight: '28px',
        height: 28,
        alignItems: 'center'
    },
    searchIcon: {
        width: 18,
        height: 18,
        marginLeft: 8,
        position: 'relative',
        stroke: 'transparent',
        fill: '#aaa',
        top: 1
    },
    active: {
        border: '1px solid #29aa99',
        '& svg': {
            stroke: 'transparent',
            fill: '#29aa99'
        }
    },
    input: {
        flex: 1,
        border: 'none',
        margin: 'auto 6px',
        color: '#333',
        fontWeight: '700',
        '&::placeholder': {
            color: '#d3d3d3',
            fontWeight: '500'
        }
    }
}

const SearchInput = ({ classes, placeholder, onChange, value, ...rest }) => {
    const [active, setActive] = useState(false)
    return (
        <div
            {...rest}
            className={classNames(classes.container, {
                [classes.active]: active
            })}
        >
            <SearchIcon className={classes.searchIcon} />
            <input
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
                className={classes.input}
                onChange={(e) => onChange(e.currentTarget.value)}
                placeholder={placeholder}
                value={value}
            />
        </div>
    )
}

export default withStyles(styles)(SearchInput)
