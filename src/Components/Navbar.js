import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Paper, Button, Typography, ListItemText, ListItemIcon, List, ListItem, Divider, ListSubheader } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import CancelIcon from '@mui/icons-material/Cancel';
import Menu from '@mui/material/Menu';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Popover from '@mui/material/Popover';
import { useNavigate } from "react-router-dom";

export default function CustomAppBar({notificationsProps}) {
    const titleStyle={marginLeft:'25px'};
    const toolBarStyle={paddingLeft:'4px', paddingRight: '4px'};
    const btnstyle={marginLeft: '15px', backgroundColor:'white', color: '#f13434'};
    const btnOkstyle={marginLeft: '300px', backgroundColor:'#f13434', color: 'white'};

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElHelp, setAnchorElHelp] = useState(null);
    const [anchorElNotification, setAnchorElNotification] = useState(null);
    const [deleted, setDeleted] = useState([]);

    const isMenuOpen = Boolean(anchorEl);

    const isHelpOpen = Boolean(anchorElHelp);
    const helpId = isHelpOpen ? 'simple-popover' : undefined;
    
    const isNotificationOpen = Boolean(anchorElNotification);
    const notificationId = isNotificationOpen ? 'notify-popover' : undefined;

    let notifications = notificationsProps;

    //useEffect(() => {
        
    //},[listDeleted])

    const handleDeleteAllNotifications = () => {
        //notifications = [];
        //console.log(notifications);
        let listDeleted = notifications.map((notification) => notification.id);
        setDeleted(listDeleted);
    }
    
    const handleDeleteNotification = (id) => {
        //console.log(notifications[id-1]);
        const listDeleted = [...deleted]
        listDeleted.push(id)
        setDeleted(listDeleted)
        //notifications = notifications.filter(( item, index ) => item.id !== id );
        
    };

    const handleClickHelp = (event) => {
        setAnchorElHelp(event.currentTarget);
    };

    const handleCloseHelp = () => {
        setAnchorElHelp(null);
    };

    const handleClickNotification = (event) => {
        setAnchorElNotification(event.currentTarget);
    };

    const handleCloseNotification = () => {
        setAnchorElNotification(null);
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        navigate("/");
    };

    const menuId = 'success-menu';
    const renderMenu = (
    <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
    >
        <MenuItem onClick={handleMenuClose}>Deslogar</MenuItem>
    </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="#f13434"
                    style={toolBarStyle}
                >
                    <AccountCircle />
                </IconButton>
                <Typography
                variant="h6"
                noWrap
                component="div"
                color="success"
                style={titleStyle}
                sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                Kognit
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
                <IconButton
                    size="large"
                    aria-label="notifications"
                    color="red"
                    onClick={handleClickNotification}
                    aria-describedby={notificationId}
                >
                    <NotificationsIcon />
                </IconButton>
                <Popover
                    id={notificationId}
                    open={isNotificationOpen}
                    anchorEl={anchorElNotification}
                    onClose={handleCloseNotification}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    PaperProps={{
                        style: { width: '400px',
                                height: '550px' },
                    }}
                >
                    <Paper >
                        <List
                        sx={{ width: '100%', maxWidth: '400px', bgcolor: 'background.paper' }}
                        subheader={
                            <ListSubheader style={{display: 'flex', padding: '8px'}}>
                                <ListItemText primary={"Editar notificações"}/>
                                <Button size="small" style={btnstyle} variant="filled" onClick={handleDeleteAllNotifications} >
                                    Limpar
                                </Button>
                            </ListSubheader>
                        }
                        >
                            <Divider/>
                            {notifications
                                .map((notification) => {
                                    if(deleted.includes(notification.id)){
                                        return(null)
                                    }
                                    else{
                                        return (
                                        <div>
                                        <ListItem key={notification.id}> 
                                            <ListItemText primary={notification.title} secondary={notification.body}/>
                                            <ListItemIcon >
                                                <IconButton
                                                    size="small"
                                                    aria-label="delete_notification"
                                                    onClick={
                                                        () => {handleDeleteNotification(notification.id)}
                                                    }
                                                    style={btnstyle}
                                                >
                                                    <CancelIcon/>
                                                </IconButton>
                                            </ListItemIcon>
                                        </ListItem>
                                        <Divider/>
                                        </div>
                                        );
                                    }
                                })}
                        </List>
                        <Paper sx={{ position: 'sticky', bottom: 0, padding:'4px'}} elevation={3}>
                            <Button size="small" style={btnOkstyle} variant="filled" onClick={handleCloseNotification}>
                                OK
                            </Button>
                        </Paper>
                    </Paper>
                </Popover>
                </Box>
            </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}