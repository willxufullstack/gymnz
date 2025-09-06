import React from 'react'
import { styled } from '@mui/material/styles';
import connect from 'react-redux/es/connect/connect'
import {bindActionCreators} from 'redux'
import * as Actions from '../../actions'
import '../../../sass/gymdayview.scss'
import SearchableTable from "-components/SearchableTable/SearchableTable";
import i18N from "../../lang";
import RoundButton from "-components/RoundButton/RoundButton";
import CreateNewDialogue from "-components/CustomDialogues/CreateNewDialogue";

const PREFIX = 'Documents';
const classes = {};
const Root = styled('div')({});

const L = i18N('Documents')

class Documents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modifyDocument: false,
            addNewDocument: false
        }
    }

    tapModify = doc => {
        this.setState({modifyDocument: doc})
        this.props.actions.refreshUploadToken({fileType: 'pdf'})
    }

    modifyDocument = (data) => {
        this.props.actions.updateGymDocument(this.props.selectedGym.id, this.state.modifyDocument.id, data).then(() => {
            this.setState({modifyDocument: false})
            this.props.actions.loadGymDocuments(this.props.selectedGym.id)
        })
    }

    addNewDocument = (data) => {
        this.props.actions.createGymDocument(this.props.selectedGym.id, data).then(() => {
            this.setState({addNewDocument: false})
            this.props.actions.loadGymDocuments(this.props.selectedGym.id)
        })
    }

    componentDidMount() {
        this.props.actions.loadGymDocuments(this.props.selectedGym.id)
    }

    getModifyDocument = row => {
        let params = {
            dialogue: true,
            title: L.modify,
            col: 1,
            onSave: (data) => this.modifyDocument(data),
            onCancel: () => {
                this.setState({modifyDocument: false})
            },
            inputFields: [
                {
                    name: 'title',
                    label: L.title,
                    type: 'string',
                    placeholder: row.title + '',
                    value: row.title
                },
                {
                    name: 'description',
                    label: L.description,
                    type: 'string',
                    placeholder: row.description + '',
                    value: row.description
                },
                {
                    name: 'author',
                    label: L.author,
                    type: 'string',
                    placeholder: row.author + '',
                    value: row.author
                },
                {
                    name: 'file_path',
                    label: L.file,
                    type: 'file',
                    value: row.file_path,
                    refreshToken: () => {
                        this.props.actions.refreshUploadToken({fileType: 'pdf'})
                    }
                }
            ]
        }

        return <CreateNewDialogue {...params} />
    }

    getAddNewDocument = () => {
        let params = {
            dialogue: true,
            title: '添加文档',
            col: 1,
            onSave: (data) => this.addNewDocument(data),
            onCancel: () => {
                this.setState({addNewDocument: false})
            },
            inputFields: [
                {
                    name: 'title',
                    label: L.title,
                    type: 'string',
                },
                {
                    name: 'description',
                    label: L.description,
                    type: 'string',
                },
                {
                    name: 'author',
                    label: L.author,
                    type: 'string',
                },
                {
                    name: 'file_path',
                    label: L.file,
                    type: 'file',
                    refreshToken: () => {
                        this.props.actions.refreshUploadToken({fileType: 'pdf'})
                    }
                }
            ]
        }

        return <CreateNewDialogue {...params} />
    }


    columns = () => [
        {title: L.title, field: 'title'},
        {title: L.description, field: 'description'},
        {title: L.author, field: 'author'},
        {
            title: L.file,
            flex: 1,
            render: r => {
                return (
                    <a href={r.file_path} target="_blank"> {r.file_path} </a>
                )
            }
        },
        {
            title: L.option,
            flex: 1,
            visibleOnHover: true,
            render: r => {
                return (
                    <React.Fragment>
                        <RoundButton
                            onClick={() => this.tapModify(r)}
                            fontSize={12}
                            label={L.modify}
                            color={'#999'}
                            variant={'text'}
                        />
                    </React.Fragment>
                )
            }
        }
    ]

    addNewDocumentButton = () => {
        return (
            <Root style={{display: 'flex'}} key='addNewDocumentButton'>
                <RoundButton
                    color="#29aa99"
                    shadow
                    onClick={ () =>  {
                        this.setState({addNewDocument: true})
                        this.props.actions.refreshUploadToken({fileType: 'pdf'})
                    }}
                    extend={6}
                    label={'添加文档'}
                    style={{ marginRight: 12 }}
                />
            </Root>
        );
    }

    render() {
        return (
            <div className="documents-page">
                <SearchableTable
                    title={L.documents}
                    columns={this.columns()}
                    data={this.props.gym.documents ? this.props.gym.documents : []}
                    actions={[this.addNewDocumentButton()]}
                />
                {this.state.modifyDocument &&
                this.getModifyDocument(this.state.modifyDocument)}
                {this.state.addNewDocument &&
                this.getAddNewDocument(this.state.addNewDocument)}
            </div>
        )
    }
}


const mapStoreToProps = store => {
    return {
        selectedGym: store.setting.selectedGym,
        setting: store.setting.selectedGym.setting,
        gym: store.gym
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

const LinkedDocuments = connect(
    mapStoreToProps,
    mapDispatchToProps
)(Documents)

export default (LinkedDocuments)
