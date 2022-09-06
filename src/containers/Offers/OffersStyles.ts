import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  main: {
    width: '100%',
    height: '100%',
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: theme.typography.fontWeightBold,
    margin: '2rem',
  },
  load: {
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: '0.5px',
    color: theme.palette.primary.dark,
    cursor: 'pointer',
    transition: 'all .5s ease-out',
    '&:hover': {
      opacity: 0.6,
    },
  },
}));
export default useStyles;
