import { styled } from '@mui/material/styles';
import classNames from 'classnames'
import React from 'react'

const PREFIX = 'Titlebar';

const classes = {
    container: `${PREFIX}-container`,
    title: `${PREFIX}-title`,
    description: `${PREFIX}-description`,
    vr: `${PREFIX}-vr`
};

const Root = styled('div')({
    [`&.${classes.container}`]: {
        display: 'flex',
        padding: '12px 0',
        alignItems: 'center',
        flex: 1
    },
    [`& .${classes.title}`]: {
        display: 'flex',
        fontSize: 24,
        fontWeight: '900',
        color: '#333',
        alignItems: 'center',
        flex: 1
    },
    [`& .${classes.description}`]: {
        fontSize: 14,
        color: '#999',
        fontWeight: '500',
        marginLeft: 12
    },
    [`& .${classes.vr}`]: {
        width: 8,
        height: 22,
        background: '#29aa99',
        display: 'inline-block',
        borderRadius: 4,
        marginRight: 24,
        boxShadow:
            '0 1px 2px 0 rgba(60,64,67,0.202), 0 1px 3px 1px rgba(60,64,67,0.079);'
    }
});

const Titlebar = ({
    noVr,
    color,
    label,
    description = '',
    children,
    className,
    fontSize = 24,
    style
}) => {
    return (
        <Root className={classNames(className, classes.container)} style={style}>
            {!noVr && (
                <span
                    className={classes.vr}
                    style={{
                        height: (fontSize * 22) / 24,
                        marginRight: fontSize,
                        backgroundColor: color ? color : '#29aa99'
                    }}
                />
            )}
            <span className={classes.title} style={{ fontSize }}>
                {label}
                <span
                    className={classes.description}
                    style={{ fontSize: fontSize - 4 }}
                >
                    {description}
                </span>
            </span>
            {children}
        </Root>
    );
}

export default (Titlebar)
