import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
import dayjs from 'dayjs'
import * as utils from '-utils'

const PREFIX = 'CalendarStyleDatePicker';

const classes = {
    container: `${PREFIX}-container`,
    month: `${PREFIX}-month`,
    arrow: `${PREFIX}-arrow`,
    day: `${PREFIX}-day`
};

const Root = styled('div')({
    [`&.${classes.container}`]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        border: 'solid 1px #ececec',
        borderRadius: 12,
        overflow: 'hidden',
        background: '#fff',
        cursor: 'pointer'
    },
    [`& .${classes.month}`]: {
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: '700',
        backgroundColor: '#29aa99',
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        boxShadow: '0px 1px 2px rgba(41, 170, 153, 0.25)'
    },
    [`& .${classes.arrow}`]: {
        fontSize: 16,
        color: '#29aa99',
        margin: '0 1px'
    },
    [`& .${classes.day}`]: {
        fontSize: 28,
        lineHeight: '34px',
        display: 'flex',

        '&:hover': {
            fontSize: 28,
            arrow: {
                display: 'block'
            }
        }
    }
});

const CalendarStyleDatePicker = ({  date, onClick, month, setDate}) => {
    const [hover, setHover] = useState()
    const day = dayjs(date)
    const changeDate = (value) => (e) => {
        e.stopPropagation()
        const changedDay = day.add(value, month ? 'month' : 'day')
        setDate(changedDay)
    }
    return (
        <Root
            className={classes.container}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <span className={classes.month}>
                { month ? day.year() : utils.getMonthLabel(day.month())}
            </span>
            <span className={classes.day}>
                {hover && <span className={classes.arrow} onClick={changeDate(-1)}>❰</span>}
                {month ? day.month() + 1 : day.date()}
                {hover && <span className={classes.arrow} onClick={changeDate(1)}>❱</span>}
            </span>
        </Root>
    );
}

export default (CalendarStyleDatePicker)
