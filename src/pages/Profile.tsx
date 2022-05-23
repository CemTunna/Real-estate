import { Button, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import useUpdate from '@/hooks/useUpdate';
import Subtitle from '@/components/Subtitle';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import DoneIcon from '@mui/icons-material/Done';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
const useStyles = makeStyles()((theme) => ({
  constainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
  },
  subtitle: {
    color: theme.palette.secondary.main,
    letterSpacing: '0.5px',
  },
  btn: {
    color: theme.palette.primary.light,
    letterSpacing: '0.5px',
    border: '1px solid ',
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.main,
    textTransform: 'capitalize',
    marginTop: '1rem',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  change: {
    fontWeight: 'bold',
    transition: 'all .2s ease-out',
    color: theme.palette.primary.dark,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
    },
  },
  footerContiner: {
    marginTop: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    letterSpacing: '0.5px',
    marginBottom: '1rem',
    fontWeight: 'normal',
    border: '1px solid',
    borderColor: '#8886866f',
    borderRadius: '5px',
    padding: '0.5rem',
    transition: 'all .2s ease-out',
  },
  inputActive: {
    borderColor: theme.palette.secondary.main,

    '&:hover': {
      borderColor: theme.palette.primary.light,
    },
  },
}));

const Profile = () => {
  const { classes } = useStyles();

  const {
    handleLogout,
    name,
    email,
    onSubmit,
    onChange,
    changedDetails,
    setChangedDetails,
  } = useUpdate();
  return (
    <Grid className={classes.constainer}>
      <header className={classes.header}>
        <Subtitle>My Profile</Subtitle>
        <Button className={classes.btn} onClick={handleLogout}>
          Log out <LogoutIcon style={{ marginLeft: '10px' }} />
        </Button>
      </header>
      <main>
        <Grid>
          <Grid className={classes.bodyContainer}>
            <Typography variant='h4' className={classes.subtitle}>
              Account Details
            </Typography>
            <IconButton
              className={classes.change}
              onClick={() => {
                changedDetails && onSubmit();
                setChangedDetails((prevState: boolean) => !prevState);
              }}
            >
              {changedDetails ? <DoneIcon /> : <SettingsIcon />}
            </IconButton>
          </Grid>
        </Grid>
        <Grid className={classes.footerContiner}>
          <form className={classes.form}>
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              variant='standard'
              type='text'
              id='name'
              className={
                !changedDetails
                  ? classes.input
                  : classNames(classes.input, classes.inputActive)
              }
              disabled={!changedDetails}
              value={name}
              onChange={onChange}
            />
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              variant='standard'
              type='email'
              id='email'
              className={
                !changedDetails
                  ? classes.input
                  : classNames(classes.input, classes.inputActive)
              }
              disabled={!changedDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </Grid>
      </main>
    </Grid>
  );
};

export default Profile;
