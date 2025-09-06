import { styled } from '@mui/material/styles';
import React from 'react'
import classNames from 'classnames'

const PREFIX = 'YAxis';

const classes = {
    label: `${PREFIX}-label`,
    vr: `${PREFIX}-vr`
};

const Root = styled('div')({
    [`& .${classes.label}`]: {
        flex: 1,
        textAlign: 'right',
        paddingRight: 12,
        color: '#8F8E8E',
        fontWeight: '400',
        fontSize: 12,
        position: 'relative',
        marginTop: -9
    },
    [`&.${classes.vr}`]: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column-reverse'
    }
});

const YAxis = ({  className, labels, style }) => {
    return (
        <Root className={classNames(classes.vr, className)} style={style}>
            {labels.map((label, i) => (
                <span key={i} className={classes.label}>
                    {label || ''}
                </span>
            ))}
        </Root>
    );
}

export default (YAxis)
