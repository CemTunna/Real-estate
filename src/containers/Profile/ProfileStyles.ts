import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  btn: {
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '20rem',
    },
  },
  mainStyle: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
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

  input: {
    letterSpacing: '0.5px',
    marginBottom: '1rem',
    fontWeight: 'normal',
    border: '1px solid',
    borderColor: '#8886866f',
    borderRadius: '5px',
    padding: '0.5rem',
    transition: 'all .2s ease-out',
    [theme.breakpoints.down('sm')]: {
      width: '20rem',
    },
  },
  inputActive: {
    borderColor: theme.palette.secondary.main,
    '&:hover': {
      borderColor: theme.palette.primary.light,
    },
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
    color: theme.palette.secondary.main,
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightBold,
    border: '2px solid transparent',
    transition: 'all .5s ease-out',
    padding: '0.5rem',
    '&:hover': {
      border: '2px solid #333',
      borderRadius: '10px',
      fontSize: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  text: {
    fontWeight: theme.typography.fontWeightBold,
    marginTop: '1rem',
  },
  list: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));
export default useStyles;
