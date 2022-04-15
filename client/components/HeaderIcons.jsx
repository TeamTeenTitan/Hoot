import  React, {useState} from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PublicIcon from '@mui/icons-material/Public';
import FortIcon from '@mui/icons-material/Fort';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ListIcon from '@mui/icons-material/List';
import ScienceIcon from '@mui/icons-material/Science';
import PaidIcon from '@mui/icons-material/Paid';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';


export default function ButtonAppBar() {
  return (

    <Box >
      <AppBar position="fixed" sx={{ boxShadow: 0, color: "white",  backgroundColor: 'white',height: 0,
        '&:hover': {
          backgroundColor: 'primary.main',
          boxShadow: 10,
          opacity: .9,
          color: "common.main",
           
          
          height: 45} }} >
        <Toolbar sx={{display: "flex", alignItems: "flex-start", justifyContent: 'space-between', }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{  transform: "scale(1.5)" }}
          >
            <AccountCircleIcon />
          </IconButton>
          <Box sx={{flexGrow: .8}}>
            <Box sx={{display: "flex", gap: 3}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{   }}
          >
            <FortIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{  }}
          >
            <SportsFootballIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{  }}
          >
            <PaidIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{  }}
          >
            <LocalPoliceIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{  }}
          >
            <ScienceIcon />
          </IconButton>
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{  }}
          >
            <PublicIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ }}
          >
            <LiveTvIcon />
          </IconButton>
          </Box>
          </Box>
          <IconButton
            size="large"
            edge="end"            
            color="inherit"
            aria-label="menu"
            sx={{transform: "scale(1.25)" }}
          >
            <ListIcon/>
          </IconButton>
        </Toolbar>




        
      </AppBar>
    </Box>
    
  );
}

// export default function PrimarySearchAppBar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box >
//       <AppBar sx={{ backgroundColor: "primary.main" }}position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
          
//           </Typography>
         
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//               <Badge badgeContent={4} color="error">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               aria-label="show 17 new notifications"
//               color="inherit"
//             >
//               <Badge badgeContent={17} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

// function ChildModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleOpen}>
//         Sign Up
//       </Button>
//       <Modal
//         hideBackdrop
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box
//           sx={{
//             variant: "outlined",
//             marginTop: 58,
//             marginLeft: 200,
//             backgroundColor: "secondary.main",
//             width: 200,
//           }}
//         >
//           <IconButton>
//             <CloseIcon></CloseIcon>
//           </IconButton>
//           <h2 id="child-modal-title">Create Account</h2>
//           <p id="child-modal-description">
//             <TextField
//               sx={{ backgroundColor: "common.main" }}
//               id="outlined-basic"
//               label="First Name"
//               variant="outlined"
//             />
//             <TextField
//               sx={{ backgroundColor: "common.main" }}
//               id="outlined-basic"
//               label="Last Name"
//               variant="outlined"
//             />
//             <TextField
//               sx={{ backgroundColor: "common.main" }}
//               id="outlined-basic"
//               label="Email Address"
//               variant="outlined"
//             />
//             <TextField
//               sx={{ backgroundColor: "common.main" }}
//               id="outlined-basic"
//               label="Password"
//               variant="outlined"
//             />
//           </p>
//           <Button onClick={handleClose} variant="outlined">
//             Sign Up
//           </Button>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }

// export default function NestedModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const [loginInput, changeLoginInput] = useState({
//     username: "",
//     password: "",
//   });

//   const handleOnUserNameChange = (event) => {
//     // update state with event.target.value
//     const userInputState = { ...loginInput };
//     userInputState.username = event.target.value;
//     changeLoginInput(userInputState);
    
//   };

//   const handleOnPasswordChange = (event) => {
//     // update state with event.target.value
//     const userInputState = { ...loginInput };
//     userInputState.password = event.target.value;
//     changeLoginInput(userInputState);
    
//   };

//   const onSubmit = (event) => {

//   }

//   return (
//     <div className="svg_icons">
//       <IconButton
//         onClick={handleOpen}
//         sx={{
//           width: 20,
//           height: 20,
//           borderRadius: 10,
//           display: "flex",
//           alignItems: "center",
//           marginTop: 2,
//           borderColor: "#FF1616",
//           borderWidth: 10,
//           backgroundColor: "secondary.main",
//         }}
//       >
//         <AccountCircle />
//       </IconButton>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//         <Box
//           sx={{
//             backgroundColor: "secondary.main",
//             marginLeft: 20,
//             width: 400,
//             marginTop: 20,
//             maxHeight: 300,
//           }}
//         >
//           <IconButton>
//             <CloseIcon></CloseIcon>
//           </IconButton>
//           <h2 id="parent-modal-title">Login</h2>
//           <p id="parent-modal-description">
//             <TextField
//               sx={{ backgroundColor: "common.main" }}
//               id="outlined-basic"
//               label="Username"
//               variant="outlined"
//               onChange={handleOnUserNameChange}
//             />
//             <TextField
//               sx={{ backgroundColor: "common.main" }}
//               id="outlined-basic"
//               label="Password"
//               variant="outlined"
//               onChange={handleOnPasswordChange}
//             />
//             <Button variant="outlined" onClick={onSubmit}>Submit</Button>
//             <p>
//               <b> Not a member? Sign up below</b>
//             </p>
//           </p>
//           <ChildModal />
//         </Box>
//       </Modal>
//     </div>
//   );
// }
