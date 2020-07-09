import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import i18N from '../../lang'
import SalarySettingItem from './SalarySettingItem'
import withStyles from '@material-ui/core/styles/withStyles'

const L = i18N('SalarySetting')
const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
    item: {
        padding: '4px 8px'
    }
}

class SalarySetting extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
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
        const { classes } = this.props
        return (
            <div className={classes.container}>
                {data.map(row => (
                    <SalarySettingItem
                        className={classes.item}
                        key={row.coach.user.email}
                        data={row}
                        onSave={this.onSave}
                    />
                ))}
            </div>
        )
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

export default withStyles(styles)(LinkedSalarySetting)
