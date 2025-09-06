import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import classNames from 'classnames'

const PREFIX = 'SearchInput';

const classes = {
    container: `${PREFIX}-container`,
    searchIcon: `${PREFIX}-searchIcon`,
    active: `${PREFIX}-active`,
    input: `${PREFIX}-input`
};

const Root = styled('div')({
    [`&.${classes.container}`]: {
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
    [`& .${classes.searchIcon}`]: {
        width: 18,
        height: 18,
        marginLeft: 8,
        position: 'relative',
        stroke: 'transparent',
        fill: '#aaa',
        top: 1
    },
    [`&.${classes.active}`]: {
        border: '1px solid #29aa99',
        '& svg': {
            stroke: 'transparent',
            fill: '#29aa99'
        }
    },
    [`& .${classes.input}`]: {
        flex: 1,
        border: 'none',
        margin: 'auto 6px',
        color: '#333',
        fontWeight: '700',
        backgroundColor: 'transparent',
        '&::placeholder': {
            color: '#d3d3d3',
            fontWeight: '500'
        }
    }
});

const SearchInput = ({  placeholder, onChange, value, ...rest }) => {
    const [active, setActive] = useState(false)
    return (
        <Root
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
        </Root>
    );
}

export default (SearchInput)
