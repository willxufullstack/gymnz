import { styled } from '@mui/material/styles';
import React from 'react'
import classNames from 'classnames'

const PREFIX = 'YGrid';

const classes = {
    hr: `${PREFIX}-hr`
};

const Root = styled('div')({
    [`&.${classes.hr}`]: {
        width: '100%',
        height: '100%',
        borderTop: '1px dotted #D3D3D3'
    }
});

const YGrid = ({  className }) => {
    return <Root className={classNames(classes.hr, className)} />;
}

export default (YGrid)