import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Dialog from '@material-ui/core/Dialog'
import Button from '-components/CustomButtons/Button.jsx'
import DialogContentText from '@material-ui/core/DialogContentText'
import i18N from '../../lang'

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
            onConfirm
        } = this.props
        return (
            <Dialog open={true} onClose={onCancel}>
                <DialogTitle>{title || L.confirmation}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{message}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCancel} color='white'>
                        {cancelText || L.cancel}
                    </Button>
                    <Button onClick={onConfirm} color='primary'>
                        {confirmText || L.ok}{' '}
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default Confirmation
