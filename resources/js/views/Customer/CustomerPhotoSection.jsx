import "../../../sass/customer.scss"
import React from 'react';
import Gallery from 'react-grid-gallery';
import { wrapImgToGalleryItem } from '-utils';
import QNUploader from "-components/QNUploader/QNUploader";
import { withStyles, Divider, Typography } from "@material-ui/core";
import dayjs from 'dayjs';

const styles = {
    actionRow: {
        width: '100%',
        textAlign: 'right'
    },
    caption: {
        width: '100%',
        display: 'inline-block',
        textAlign: 'center'
    }
};

class CustomerPhotoSection extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange = (e) => {
        e.preventDefault();
        let { target } = e;
        let file = target.files[0];
        console.log(file);
    };

    uploadSuccess = (url) => {
        console.log(url);
        // refresh token after success
        this.props.actions.refreshUploadToken();
        // save image
        this.props.actions.createCustomerPhoto(this.props.customerId, url)
            .then(() => {
                this.props.actions.loadCustomerPhotos(this.props.customerId);
            });
    };

    uploadFailed = () => {
        this.props.actions.showError('Upload image filed')
    };

    getGallaryItems = () => {
        const caption = (c) => <span className={this.props.classes.caption}>
            <Typography variant='caption'>{c}</Typography>
        </span>;
        return this.props.gym.customerPage.photos.map(p => wrapImgToGalleryItem(p.url, caption(dayjs(p.created_at).format('MM/DD'))));
    }

    componentWillMount() {
        this.props.actions.refreshUploadToken();
        this.props.actions.loadCustomerPhotos(this.props.customerId);
    }

    render() {
        const { classes } = this.props;
        return (<React.Fragment>
            <div className={classes.actionRow}>
                <QNUploader color='transparentPrimary' {...this.props.setting.uploadToken} onSuccess={this.uploadSuccess} onFail={this.uploadFailed} />
                <Divider />
            </div>
            <Gallery images={this.getGallaryItems()} enableImageSelection={false} />
        </React.Fragment>
        );
    }
}

export default withStyles(styles)(CustomerPhotoSection);
