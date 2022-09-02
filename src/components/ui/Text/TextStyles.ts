import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  text: {
    color: theme.palette.primary.dark,
    letterSpacing: '0.5px',
  },
}));
export default useStyles;
