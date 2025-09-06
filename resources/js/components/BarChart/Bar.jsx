import { Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react'

const PREFIX = 'Bar';

const classes = {
    container: `${PREFIX}-container`,
    barContainer: `${PREFIX}-barContainer`,
    flexContainer: `${PREFIX}-flexContainer`,
    bar: `${PREFIX}-bar`
};

const Root = styled('div')({
    [`& .${classes.container}`]: {
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridTemplateRows: 'repeat(1, 1fr)',
        gridColumnGap: 0,
        gridRowGap: 0
    },
    [`&.${classes.barContainer}`]: {
        height: '100%',
        gridArea: '1 / 1 / 2 / 2',
        display: 'flex',
        alignItems: 'flex-end'
    },
    [`& .${classes.flexContainer}`]: {
        width: 10,
        height: '100%',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gridTemplateRows: 'repeat(1, 1fr)'
    },
    [`& .${classes.bar}`]: {
        width: '100%',
        boxShadow: '0 0 4px #e3e3e3'
    }
});

const BarItem = ({  width, value, max, color }) => {
    return (
        <Root
            className={classes.barContainer}
            style={{
                width
            }}
        >
            <div
                className={classes.bar}
                style={{
                    borderRadius: width / 2,
                    height: (value * 100) / max + '%',
                    backgroundColor: color
                }}
            />
        </Root>
    );
}

const Bar = ({  data, colors, legends, max = 100, width = 10 }) => {
    const TooltipTitle = ({ data, colors }) => {
        return (
            <React.Fragment>
                {data.map((row, i) => {
                    return (
                        <div key={i + ''} style={{ display: 'flex', alignItems: 'center' }}>
                            <span
                                style={{
                                    background: colors[i],
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                    marginRight: 6
                                }}
                            />
                            <span>{legends[i]}: {row}</span>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }

    return (
        <div className={classes.container}>
            <Tooltip placement="right" title={<TooltipTitle data={data} colors={colors} />}>
                <div className={classes.flexContainer}>
                    {data.map((v, i) => (
                        <BarItem
                            key={i}
                            classes={classes}
                            value={v}
                            max={max}
                            width={width}
                            color={colors[i]}
                        />
                    ))}
                </div>
            </Tooltip>
        </div>
    )
}

export default (Bar)
