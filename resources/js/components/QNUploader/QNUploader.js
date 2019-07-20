import React from 'react';
import Button from "-components/CustomButtons/Button.jsx";
import { compressImg } from "-utils";
import { ImgPrefix } from "-const";
import * as qiniu from 'qiniu-js'
import { withStyles } from "@material-ui/core";
import Add from "@material-ui/icons/Add";

const styles = {
    input: {
        display: 'none',
    },
}

class QNUploader extends React.Component {
    constructor(props) {
        super(props);
    }

    refreshToken = () => {

    };

    onChange = (e) => {
        e.preventDefault();
        let { target } = e;
        let file = target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            var imgori = new Image();
            imgori.src = reader.result;

            imgori.onload = () => {
                var compressed = compressImg(imgori, 60)
                var observable = qiniu.upload(compressed, this.props.fileName, this.props.token);
                observable.subscribe((e) => {
                    console.log('next', e);
                }, (e) => {
                    this.props.onFail(e);
                }, () => {
                    this.props.onSuccess(ImgPrefix + this.props.fileName);
                })
            }

        }
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <input
                    className={classes.input}
                    type="file"
                    ref="fileUploader"
                    onChange={this.onChange}
                />
                <Button color={this.props.color} onClick={() => { this.refs.fileUploader.click() }}><Add/>{this.props.title || 'Add'}</Button>
            </div>
        );
    }
}

export default withStyles(styles)(QNUploader);