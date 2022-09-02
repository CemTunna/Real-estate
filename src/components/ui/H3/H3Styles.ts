import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  title: {
    color: theme.palette.primary.light,
    letterSpacing: '0.5px',
    fontWeight: 'bold',
  },
}));
export default useStyles;
