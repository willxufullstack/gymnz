import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ClickAwayListener from '@mui/material/ClickAwayListener'

function SimpleMenu({ ...props }) {
    const [anchorEl, setAnchorEl] = React.useState(null)

    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose(item) {
        return function() {
            setAnchorEl(null)
            item && item.onSelect && item.onSelect()
        }
    }

    return (
        <div>
            <ClickAwayListener onClickAway={handleClose()}>
                <div>
                    <Button
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        style={{
                            fontSize: props.fontSize ? props.fontSize : '14px',
                            fontWeight: props.fontWeight ? props.fontWeight : '400',
                            color: props.textColor ? props.textColor : 'white',
                            padding: 0,
                            justifyContent: 'flex-start'
                        }}
                    >
                        {props.displayText || ''}
                        {props.icon || ''}
                    </Button>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {props.items.map(item => (
                            <MenuItem
                                key={item.text}
                                onClick={handleClose(item)}
                            >
                                {item.text}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </ClickAwayListener>
        </div>
    )
}

export default SimpleMenu
