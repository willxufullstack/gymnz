import { withStyles } from '@material-ui/core'
import React, { useState } from 'react'
import classNames from 'classnames'
import Titlebar from '../TitleBar/Titlebar'
import SearchInput from '../SearchInput/SearchInput'

const styles = {
    container: {
        flex: 1,
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 6
    },
    tableBody: {
        flex: 1,
        overflow: 'scroll'
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        minHeight: 36,
        borderRadius: 4,
        padding: '0 4px',

        '&:hover': {
            background: '#f3f3f3'
        },
        '& .visibleOnHover': {
            visibility: 'hidden'
        },
        '&:hover .visibleOnHover': {
            visibility: 'visible'
        }
    },
    th: {
        minHeight: 42,
        borderBottom: '1px solid #ececec',
        fontWeight: '900',
        marginBottom: 8,

        '&:hover': {
            background: 'none'
        },
    }
}

const Th = ({ classes, columns }) => {
    return (
        <div className={classNames(classes.row, classes.th)}>
            {columns.map((col, i) => (
                <div key={i} style={{ flex: col.flex ? col.flex : 1 }}>
                    {col.title}
                </div>
            ))}
        </div>
    )
}

const Tr = ({ classes, columns, row, onClick }) => {
    const Td = ({ col }) => {
        if (col.render) {
            return (
                <div
                    className={classNames(
                        col.visibleOnHover && 'visibleOnHover'
                    )}
                    style={{ flex: col.flex ? col.flex : 1, display: 'flex' }}
                >
                    {col.render(row)}
                </div>
            )
        }
        if (col.field) {
            return (
                <div
                    className={classNames(
                        col.visibleOnHover && 'visibleOnHover'
                    )}
                    style={{ flex: col.flex ? col.flex : 1, display: 'flex' }}
                >
                    {row[col.field]}
                </div>
            )
        }
        return ''
    }
    return (
        <div className={classNames(classes.row)}  onClick={(e) => onClick(e, row)}>
            {columns.map((col, i) => (
                <Td key={i} col={col} />
            ))}
        </div>
    )
}

const SearchableTable = ({ classes, title, columns, data, onRowClick, onSearch }) => {
    const [searchKey, setSearchKey] = useState('')

    const filteredData = () => {
        if(searchKey && searchKey.length) {
            return onSearch(searchKey)
        }
        return data
    }
    return (
        <React.Fragment>
            {title && <Titlebar label={title} style={{ flex: 'none' }}>
                <SearchInput
                    onChange={setSearchKey}
                    value={searchKey}
                    placeholder={'姓名/首字母'}
                    style={{backgroundColor: '#fff'}}
                />
            </Titlebar>}
            <div className={classes.container}>
                <Th classes={classes} columns={columns} />
                <div className={classes.tableBody}>
                    {filteredData().map((row, i) => (
                        <Tr
                            key={i}
                            classes={classes}
                            columns={columns}
                            row={row}
                            onClick={onRowClick}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default withStyles(styles)(SearchableTable)
