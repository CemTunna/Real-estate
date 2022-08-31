import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  input: {
    width: '40rem',
    [theme.breakpoints.down('sm')]: {
      width: '20rem',
    },
  },
  link: {
    marginTop: '1rem',
    color: theme.palette.secondary.main,
    transition: 'all .2s ease-out',
    letterSpacing: '0.5px',
    '&:hover': {
      color: theme.palette.primary.light,
    },
  },
  btn: {
    flex: 1,
    marginTop: '1rem',
  },
}));
export default useStyles;
