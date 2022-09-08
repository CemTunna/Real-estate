import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles()((theme) => ({
  input: {
    color: theme.palette.primary.dark,
    letterSpacing: '0.5px',
    marginBottom: '1rem',
    border: '2px solid #05386B ',
    borderRadius: '3px',
    overflow: 'hidden',
    padding: '0.2rem',
  },
}));
export default useStyles;
