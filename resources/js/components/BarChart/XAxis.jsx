import { styled } from '@mui/material/styles';
import React from 'react'
import classNames from 'classnames'

const PREFIX = 'XAxis';

const classes = {
    label: `${PREFIX}-label`,
    hr: `${PREFIX}-hr`
};

const Root = styled('div')({
    [`& .${classes.label}`]: {
        flex: 1,
        textAlign: 'center',
        color: '#8F8E8E',
        fontWeight: '400',
        fontSize: 12
    },
    [`&.${classes.hr}`]: {
        width: '100%',
        display: 'flex',
        paddingTop: 8
    }
});

const XAxis = ({  className, height, labels, unitWidth = 8 }) => {
    // const step = labels.length / 6
    return (
        <Root
            style={{ minHeight: height }}
            className={classNames(classes.hr, className)}
        >
            {labels.map((label, i) => (
                <span key={i} className={classes.label}>
                    {label}
                </span>
            ))}
        </Root>
    );
}

export default (XAxis)
