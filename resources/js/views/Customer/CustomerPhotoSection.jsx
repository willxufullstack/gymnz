import '../../../sass/customer.scss'
import React from 'react'
import Gallery from 'react-grid-gallery'
import { wrapImgToGalleryItem } from '-utils'
import QNUploader from '-components/QNUploader/QNUploader'
import { withStyles, Divider, Typography } from '@material-ui/core'
import dayjs from 'dayjs'
import Button from '-components/CustomButtons/Button'
import Confirmation from '-components/CustomDialogues/Confirmation'
import i18N from '../../lang'

const L = i18N('CustomerPhotoSection')

const styles = {
    actionRow: {
        width: '100%',
        textAlign: 'right'
    },
    caption: {
        width: '100%',
        display: 'flex'
    },
    removeBtn: {},
    date: {
        flex: 1,
        paddingLeft: 16,
        lineHeight: '38px'
    }
}

class CustomerPhotoSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deleteConfirmation: false
        }
    }

    onChange = e => {
        e.preventDefault()
        let { target } = e
        let file = target.files[0]
        console.log(file)
    }

    uploadSuccess = url => {
        console.log(url)
        // refresh token after success
        this.props.actions.refreshUploadToken()
        // save image
        this.props.actions
            .createCustomerPhoto(this.props.customerId, url)
            .then(() => {
                this.props.actions.loadCustomerPhotos(this.props.customerId)
            })
    }

    uploadFailed = () => {
        this.props.actions.showError(L.uploadFailed)
    }

    onTapDeletePhoto = p => {
        this.setState({ deleteConfirmation: p })
    }

    deletePhoto = () => {
        this.props.actions
            .deleteCustomerPhoto(
                this.props.customerId,
                this.state.deleteConfirmation.id
            )
            .then(() => {
                this.props.actions.loadCustomerPhotos(this.props.customerId)
            })
        this.setState({ deleteConfirmation: false })
    }

    getGallaryItems = () => {
        const caption = pic => (
            <div className={this.props.classes.caption}>
                <Typography
                    className={this.props.classes.date}
                    variant='caption'
                >
                    {dayjs(pic.created_at).format('MM/DD')}
                </Typography>
                <Button
                    onClick={() => this.onTapDeletePhoto(pic)}
                    size='sm'
                    color='transparentGray'
                    className={this.props.classes.removeBtn}
                >
                    {L.delete}
                </Button>
            </div>
        )
        return this.props.gym.customerPage.photos.map(p =>
            wrapImgToGalleryItem(p.url, caption(p))
        )
    }

    componentWillMount() {
        this.props.actions.refreshUploadToken()
        this.props.actions.loadCustomerPhotos(this.props.customerId)
    }

    render() {
        const { classes } = this.props

        return (
            <React.Fragment>
                {this.state.deleteConfirmation && (
                    <Confirmation
                        message={L.deleteConfirm}
                        onCancel={() =>
                            this.setState({ deleteConfirmation: false })
                        }
                        onConfirm={this.deletePhoto}
                    />
                )}
                <div className={classes.actionRow}>
                    <QNUploader
                        title={L.add}
                        color='transparentPrimary'
                        {...this.props.setting.uploadToken}
                        onSuccess={this.uploadSuccess}
                        onFail={this.uploadFailed}
                    />
                    <Divider />
                </div>
                <Gallery
                    images={this.getGallaryItems()}
                    enableImageSelection={false}
                    margin={6}
                />
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(CustomerPhotoSection)
