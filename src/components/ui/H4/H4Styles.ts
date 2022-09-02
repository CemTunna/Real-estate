import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  title: {
    color: theme.palette.secondary.main,
    letterSpacing: '0.5px',
  },
}));
export default useStyles;
