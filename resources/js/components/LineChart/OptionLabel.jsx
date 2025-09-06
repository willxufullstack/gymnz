import { styled } from '@mui/material/styles';
import React from 'react'
import classNames from 'classnames'
import DirectionIcon from '../DirectionIcon/DirectionIcon'

const PREFIX = 'OptionLabel';

const classes = {
    container: `${PREFIX}-container`,
    label: `${PREFIX}-label`,
    value: `${PREFIX}-value`,
    unselected: `${PREFIX}-unselected`
};

const Root = styled('div')({
    [`&.${classes.container}`]: {
        flex: 1,
        cursor: 'pointer',
        minWidth: 80,
        display: 'flex',
        flexDirection: 'column'
    },
    [`& .${classes.label}`]: {
        color: '#333',
        fontSize: 10,
        lineHeight: '16px',
        fontWeight: '500'
    },
    [`& .${classes.value}`]: {
        color: '#515151',
        fontSize: 16,
        fontWeight: '700',
        display: 'flex',
        lineHeight: '32px'
    },
    [`& .${classes.unselected}`]: {
        filter: 'opacity(0.5)'
    }
});

const OptionLabel = ({
    label,
    value,
    direction,
    selected,
    onClick
}) => {
    return (
        <Root
            onClick={onClick}
            className={classNames(
                classes.container,
                !selected && classes.unselected
            )}
        >
            <div className={classes.label}>{label}</div>
            <div className={classes.value}>
                {value} {direction && <DirectionIcon direction={direction} size={32} />}
            </div>
        </Root>
    );
}

export default (OptionLabel)
