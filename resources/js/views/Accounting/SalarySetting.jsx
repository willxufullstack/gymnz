import React from 'react'
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import i18N from '../../lang'
import SalarySettingItem from './SalarySettingItem'
const PREFIX = 'SalarySetting';

const classes = {
    container: `${PREFIX}-container`,
    item: `${PREFIX}-item`
};

const Root = styled('div')({
    [`&.${classes.container}`]: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
    [`& .${classes.item}`]: {
        padding: '4px 8px'
    }
});

const L = i18N('SalarySetting')

class SalarySetting extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.actions.loadGymSalarySetting(this.props.selectedGym.id)
    }

    onSave = data => {
        this.props.actions.updateGymSalarySetting(
            this.props.selectedGym.id,
            data
        )
    }

    render() {
        const data = this.props.gym.salarySettings
        const { } = this.props
        return (
            <Root className={classes.container}>
                {data.map(row => (
                    <SalarySettingItem
                        className={classes.item}
                        key={row.coach.user.email}
                        data={row}
                        onSave={this.onSave}
                    />
                ))}
            </Root>
        );
    }
}

const mapStoreToProps = store => {
    return {
        selectedGym: store.setting.selectedGym,
        gym: store.gym
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

const LinkedSalarySetting = connect(
    mapStoreToProps,
    mapDispatchToProps
)(SalarySetting)

export default (LinkedSalarySetting)
