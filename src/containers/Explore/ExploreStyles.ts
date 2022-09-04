import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  bodyContainer: {
    display: 'flex',
    padding: '1rem',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  link: {
    marginRight: '2rem',
    textDecoration: 'none',
    transition: 'all .5s ease-out',
    '&:hover': {
      transform: 'scale(1.01)',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
      marginBottom: '1rem',
    },
  },
  img: {
    width: '100%',
    marginRight: '2rem',
    border: '1px solid #333',
    borderRadius: '10px',
    overflow: 'hidden',
    height: '10rem',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
  },
}));

export default useStyles;
