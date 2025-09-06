import { styled } from '@mui/material/styles';
import React from 'react'
import classNames from 'classnames'

const PREFIX = 'Legend';

const classes = {
    container: `${PREFIX}-container`,
    bar: `${PREFIX}-bar`,
    label: `${PREFIX}-label`
};

const Root = styled('div')({
    [`&.${classes.container}`]: {
        display: 'flex',
        alignItems: 'center',
        margin: '0 6px'
    },
    [`& .${classes.bar}`]: {
        width: 16,
        height: 6,
        borderRadius: 3,
        marginRight: 6,
        boxShadow: '0 0 4px #e3e3e3'
    },
    [`& .${classes.label}`]: {
        fontSize: 12,
        fontWeight: '700'
    }
});

const Legend = ({  color, label }) => {
    return (
        <Root className={classes.container}>
            <span style={{ backgroundColor: color }} className={classes.bar} />
            <span className={classes.label}>{label}</span>
        </Root>
    );
}

export default (Legend)
