import { styled } from '@mui/material/styles';
import React from 'react'
import classNames from 'classnames'

const PREFIX = 'LightTabTitle';

const classes = {
    container: `${PREFIX}-container`,
    label: `${PREFIX}-label`,
    underline: `${PREFIX}-underline`
};

const Root = styled('div')({
    [`&.${classes.container}`]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
    },
    [`& .${classes.label}`]: {
        color: '#999',
        minWidth: 80,
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '500',

        '&.active': {
            color: '#333',
            fontWeight: '900',
            fontSize: 16
        }
    },
    [`& .${classes.underline}`]: {
        backgroundColor: '#333',
        visibility: 'hidden',
        height: 6,
        borderRadius: 3,
        width: 18,
        boxShadow: '0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149);',

        '&.active' : {
            visibility: 'visible',
        }
    }
});

const LightTabTitle = ({  label, active }) => {
    return (
        <Root className={classes.container}>
            <div className={classNames(classes.label, active && 'active')}>
                {label}
            </div>
            <span className={classNames(classes.underline, active && 'active')} />
        </Root>
    );
}

export default (LightTabTitle)
