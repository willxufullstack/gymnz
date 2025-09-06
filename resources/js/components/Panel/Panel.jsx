import { styled } from '@mui/material/styles';
import React from 'react'
import classNames from 'classnames'

const PREFIX = 'Panel';

const classes = {
    container: `${PREFIX}-container`
};

const Root = styled('div')({
    [`&.${classes.container}`]: {
        overflow: 'hidden',
        border: '1px solid #f3f3f3',
        background: '#fff',
        borderRadius: 12
    }
});

const Panel = ({  children, flex, scroll, className, style }) => {
    let defaultStyle = {}
    if (flex) {
        defaultStyle = { ...defaultStyle, flex: 1 }
    }
    if( scroll) {
        defaultStyle = { ...defaultStyle, overflow: 'scroll' }
    }

    return (
        <Root className={classNames(classes.container, className)} style={{...defaultStyle, ...style}}>
            {children}
        </Root>
    );
}

export default (Panel)
