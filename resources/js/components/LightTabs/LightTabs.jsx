import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
import LightTabTitle from './LightTabTitle'
import Titlebar from '../TitleBar/Titlebar'

const PREFIX = 'LightTabs';

const classes = {
    container: `${PREFIX}-container`,
    header: `${PREFIX}-header`,
    body: `${PREFIX}-body`
};

const Root = styled('div')({
    [`&.${classes.container}`]: {
        display: 'flex',
        flexDirection: 'column'
    },
    [`& .${classes.header}`]: {
        display: 'flex',
        // minHeight: 48,
        alignItems: 'center'
    },
    [`& .${classes.body}`]: {
        marginTop: 8,
        padding: '0 20px',
        overflow: 'scroll'
    }
});

const LightTabs = ({  title, tabs, style, noVr, onSwitch }) => {
    const [activeTab, setActiveTab] = useState(0)
    const onClickTab = i => () => {
        setActiveTab(i)
        onSwitch && onSwitch(i)
    }
    return (
        <Root className={classes.container} style={style}>
            <Titlebar noVr={noVr} label={title}>
                <div className={classes.header}>
                    {tabs.filter(tab => !tab.hidden).map((tab, i) => (
                        <div key={tab.tabName} onClick={onClickTab(i)}>
                            <LightTabTitle
                                label={tab.tabName}
                                active={i === activeTab}
                            />
                        </div>
                    ))}
                </div>
            </Titlebar>
            <div className={classes.body}>{tabs[activeTab].tabContent}</div>
        </Root>
    );
}

export default (LightTabs)
