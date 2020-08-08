import React from 'react'
import { compressImg } from '-utils'
import { ImgPrefix } from '-const'
import * as qiniu from 'qiniu-js'
import { withStyles } from '@material-ui/core'
import RoundButton from '../RoundButton/RoundButton'
import HashLoader from 'react-spinners/HashLoader'

const styles = {
    input: {
        display: 'none'
    }
}

class QNUploader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    refreshToken = () => {}

    onChange = e => {
        e.preventDefault()
        let { target } = e
        let file = target.files[0]
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = event => {
            var imgori = new Image()
            imgori.src = reader.result

            imgori.onload = () => {
                this.setState({ loading: true })
                const ratio = this.props.noCompress ? 100 : 60
                var compressed = compressImg(imgori, ratio)
                var observable = qiniu.upload(
                    compressed,
                    this.props.fileName,
                    this.props.token
                )
                observable.subscribe(
                    e => {
                        console.log('next', e)
                    },
                    e => {
                        this.setState({ loading: false })
                        this.props.onFail(e)
                    },
                    () => {
                        this.setState({ loading: false })
                        this.props.onSuccess(ImgPrefix + this.props.fileName)
                    }
                )
            }
        }
    }

    render() {
        const { classes } = this.props
        return (
        <div style={{ display: 'flex' }}>
                <input
                    className={classes.input}
                    type="file"
                    ref="fileUploader"
                    onChange={this.onChange}
                />
                {this.state.loading ? (
                    <HashLoader loading color={'#89ECC2'} />
                ) : (
                    <RoundButton
                        color={'#29aa99'}
                        variant={this.props.variant}
                        fontSize={
                            this.props.fontSize ? this.props.fontSize : 12
                        }
                        label={this.props.title || 'Add'}
                        onClick={() => {
                            this.refs.fileUploader.click()
                        }}
                    />
                )}
            </div>
        )
    }
}

export default withStyles(styles)(QNUploader)
