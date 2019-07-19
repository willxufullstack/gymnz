import "../../../sass/customer.scss"
import React from 'react';
import QNUploader from "-components/QNUploader/QNUploader";


class CustomerPhotoSection extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange = (e) => {
        e.preventDefault();       
        let {target} = e;
        let file = target.files[0];
        console.log(file);
    };

    uploadSuccess = (url) => {
        console.log(url);
        // refresh token after success
        this.props.actions.refreshUploadToken();
        // save image
        this.props.actions.createCustomerPhoto(this.props.customerId, url);
    };

    uploadFailed = () => {
        this.props.actions.showError('Upload image filed')
    };

    componentWillMount() {
        this.props.actions.refreshUploadToken();
    }

    render() {
        return (<QNUploader {...this.props.setting.uploadToken} onSuccess={this.uploadSuccess} onFail={this.uploadFailed}/>);
    }
}

export default CustomerPhotoSection;