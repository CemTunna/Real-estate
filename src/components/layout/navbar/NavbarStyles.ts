import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'column',
    },
  },
  icon: {
    marginLeft: '0.5rem',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-around',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '1rem',
    },
  },
  btn: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    letterSpacing: '0.5px',
    border: '1px solid transparent',
    width: '10rem',
    '&:hover': {
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
}));

export default useStyles;
