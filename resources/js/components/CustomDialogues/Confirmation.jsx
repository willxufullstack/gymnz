import React from 'react'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'
import DialogContentText from '@mui/material/DialogContentText'
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
                        fontSize={14}
                        label={cancelText || L.cancel}
                    />
                    <RoundButton
                        extend={8}
                        color='#29aa99'
                        onClick={onConfirm}
                        fontSize={14}
                        label={confirmText || L.ok}
                    />
                </DialogActions>
            </Dialog>
        )
    }
}

export default Confirmation
