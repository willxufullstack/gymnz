import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import DialogContentText from '@material-ui/core/DialogContentText'
import i18N from '../../lang'
import RoundButton from '../RoundButton/RoundButton'
import Titlebar from '../TitleBar/Titlebar'

const L = i18N('Confirmation')
class Confirmation extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {
            title,
            message,
            cancelText,
            confirmText,
            onCancel,
            onConfirm,
            open=true
        } = this.props
        return (
            <Dialog open={open} onClose={onCancel}>
                <DialogTitle>
                    <Titlebar label={title || L.confirmation} style={{minWidth: 400, padding: 0}} />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>{message}</DialogContentText>
                </DialogContent>
                <DialogActions style={{margin: '8px 12px'}}>
                    <RoundButton
                        extend={8}
                        color='#29aa99'
                        variant={'outline'}
                        onClick={onCancel}
                        fontSize={16}
                        label={cancelText || L.cancel}
                    />
                    <RoundButton
                        extend={8}
                        color='#29aa99'
                        onClick={onConfirm}
                        fontSize={16}
                        label={confirmText || L.ok}
                    />
                </DialogActions>
            </Dialog>
        )
    }
}

export default Confirmation
