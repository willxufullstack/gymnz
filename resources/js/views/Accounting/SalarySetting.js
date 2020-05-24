import React from 'react'
import i18N from '../../lang'
import SalarySettingItem from './SalarySettingItem'
import { Grid } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

const L = i18N('SalarySetting')
const styles = {
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

    onSave = (data) => {
        this.props.actions.updateGymSalarySetting(
            this.props.selectedGym.id,
            data
        )
    }

    render() {
        const data = this.props.gym.salarySettings
        const { classes } = this.props
        return (
            <Grid container spacing={2}>
                {data.map(row => (
                    <Grid
                        key={row.coach.user.email}
                        className={classes.item}
                        item
                        xs={4}
                    >
                        <SalarySettingItem data={row} onSave={this.onSave} />
                    </Grid>
                ))}
            </Grid>
        )
    }
}

export default withStyles(styles)(SalarySetting)
