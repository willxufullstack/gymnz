import { styled } from '@mui/material/styles';
import React, { useState } from 'react'
import classNames from 'classnames'
import Titlebar from '../TitleBar/Titlebar'
import SearchInput from '../SearchInput/SearchInput'

const PREFIX = 'SearchableTable';

const classes = {
    container: `${PREFIX}-container`,
    tableBody: `${PREFIX}-tableBody`,
    row: `${PREFIX}-row`,
    th: `${PREFIX}-th`,
    emptyText: `${PREFIX}-emptyText`
};

const Root = styled('div')({
    [`& .${classes.container}`]: {
        flex: 1,
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 6
    },
    [`& .${classes.tableBody}`]: {
        flex: 1,
        overflow: 'scroll'
    },
    [`&.${classes.row}`]: {
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
    [`&.${classes.th}`]: {
        minHeight: 42,
        borderBottom: '1px solid #ececec',
        fontWeight: '900',
        marginBottom: 8,

        '&:hover': {
            background: 'none'
        }
    },
    [`& .${classes.emptyText}`]: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 700,
        color: '#ccc'
    }
});

const Th = ({  columns }) => {
    return (
        <Root className={classNames(classes.row, classes.th)}>
            {columns.map((col, i) => (
                <div key={i} style={{ flex: col.flex ? col.flex : 1 }}>
                    {col.title}
                </div>
            ))}
        </Root>
    );
}

const Tr = ({  columns, row, onClick, lineThrough }) => {
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
        <div
            className={classNames(classes.row)}
            style={{textDecoration: lineThrough && lineThrough(row) ? 'line-through' : 'none' }}
            onClick={e => onClick && onClick(e, row)}
        >
            {columns.map((col, i) => (
                <Td key={i} col={col} />
            ))}
        </div>
    )
}

const SearchableTable = ({
    title,
    columns,
    className,
    data,
    onRowClick,
    onSearch,
    style,
    lineThrough,
    actions,
    csv,
}) => {
    const [searchKey, setSearchKey] = useState('')

    const filteredData = () => {
        if (searchKey && searchKey.length) {
            return onSearch(searchKey)
        }
        return data
    }
    return (
        <div className={className} style={style}>
            {title && (
                <Titlebar label={title} style={{ flex: 'none' }}>
                    {onSearch && (
                        <SearchInput
                            onChange={setSearchKey}
                            value={searchKey}
                            placeholder={'姓名/首字母'}
                            style={{ backgroundColor: '#fff' }}
                        />
                    )}
                    {actions && <div style={{ display: 'flex' }}>{actions}</div>}
                </Titlebar>
            )}
            <div className={classes.container}>
                <Th columns={columns} />
                {filteredData().length ? (
                    <div className={classes.tableBody}>
                        {filteredData().map((row, i) => (
                            <Tr
                                key={i}
                                columns={columns}
                                row={row}
                                onClick={onRowClick}
                                lineThrough={lineThrough}
                            />
                        ))}
                    </div>
                ) : (
                    <p className={classes.emptyText}>没有匹配的数据</p>
                )}
            </div>
        </div>
    )
}

export default (SearchableTable)
