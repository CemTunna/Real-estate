import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  container: {
    padding: 0,
    border: '1px solid #3333337d',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'all .5s ease-out',
    marginBottom: '1rem',
    marginRight: '1rem',
    maxHeight: '15rem',
    '&:hover': {
      boxShadow:
        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '40rem',
    },
  },
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',
    padding: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginBottom: 0,
    },
  },
  text: {
    fontWeight: theme.typography.fontWeightBold,
    marginTop: '0.5rem',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0.7rem',
      marginTop: '0',
    },
  },
  icon: {
    color: theme.palette.primary.dark,
    marginRight: '1rem',
  },
  nameContainer: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      flexDirection: 'column',
      overflowY: 'scroll',
      height: '100%',
    },
  },
  subNameContainer: {
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      // display: 'flex',
      width: '100%',
    },
  },
  utilityContainer: {
    display: 'flex',
    justifyContent: 'center',

    width: '60%',
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem',
      width: '100%',
    },
  },
  img: {
    width: '40%',
    margin: 0,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '10rem',
      margin: 0,
    },
  },
  subUtilityContainer: {
    display: 'flex',
    width: '100%',
  },
}));

export default useStyles;
