import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  main: {
    width: '100%',
    height: '100%',
    alignSelf: 'flex-start',
  },
  text: {
    fontWeight: theme.typography.fontWeightBold,
    margin: '2rem',
  },
}));

export default useStyles;
