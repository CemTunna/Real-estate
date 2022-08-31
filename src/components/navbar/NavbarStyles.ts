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
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down('lg')]: {
      marginTop: '1rem',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      marginLeft: '1rem',
    },
  },
  btn: {
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
  activeBtn: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.light,
  },
}));

export default useStyles;
