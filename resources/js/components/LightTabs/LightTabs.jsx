import { withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import LightTabTitle from './LightTabTitle'
import Titlebar from '../TitleBar/Titlebar'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        display: 'flex',
        // minHeight: 48,
        alignItems: 'center'
    },
    body: {
        marginTop: 8,
        padding: '0 20px',
        overflow: 'scroll'
    }
}

const LightTabs = ({ classes, title, tabs, style, noVr, onSwitch }) => {
    const [activeTab, setActiveTab] = useState(0)
    const onClickTab = i => () => {
        setActiveTab(i)
        onSwitch && onSwitch(i)
    }
    return (
        <div className={classes.container} style={style}>
            <Titlebar noVr={noVr} label={title}>
                <div className={classes.header}>
                    {tabs.map((tab, i) => (
                        <div key={i} onClick={onClickTab(i)}>
                            <LightTabTitle
                                label={tab.tabName}
                                active={i === activeTab}
                            />
                        </div>
                    ))}
                </div>
            </Titlebar>
            <div className={classes.body}>{tabs[activeTab].tabContent}</div>
        </div>
    )
}

export default withStyles(styles)(LightTabs)
