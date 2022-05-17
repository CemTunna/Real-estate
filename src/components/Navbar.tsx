import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useLocation } from 'react-router-dom';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const useStyles = makeStyles()((theme) => ({
  navbar: {
    border: '1px solid red',
  },
  wrapper: {
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1100px',
    margin: '0 auto',
    borderRadius: '5px',
    padding: '1.5rem',
  },
  icon: {
    color: theme.palette.secondary.main,
    fontSize: '2rem',
  },
}));
const Navbar = () => {
  const { classes } = useStyles();
  const [value, setValue] = React.useState('');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <footer className={classes.navbar}>
      <BottomNavigation
        className={classes.wrapper}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label='Offers'
          value='offers'
          icon={<LocalOfferIcon className={classes.icon} />}
        />
        <BottomNavigationAction
          label='Explore'
          value='explore'
          icon={<ExploreIcon className={classes.icon} />}
        />

        <BottomNavigationAction
          label='Profil'
          value='profil'
          icon={<PersonOutlineIcon className={classes.icon} />}
        />
      </BottomNavigation>
    </footer>
  );
};

export default Navbar;
// import * as React from 'react';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// export default function LabelBottomNavigation() {
//   const [value, setValue] = React.useState('recents');

//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };

//   return (
//     <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
//       <BottomNavigationAction
//         label="Recents"
//         value="recents"
//         icon={<RestoreIcon />}
//       />
//       <BottomNavigationAction
//         label="Favorites"
//         value="favorites"
//         icon={<FavoriteIcon />}
//       />
//       <BottomNavigationAction
//         label="Nearby"
//         value="nearby"
//         icon={<LocationOnIcon />}
//       />
//       <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
//     </BottomNavigation>
//   );
// }
