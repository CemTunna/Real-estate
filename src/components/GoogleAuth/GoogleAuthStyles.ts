import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  text: {
    letterSpacing: '0.5px',
    textTransform: 'lowercase',
    color: theme.palette.primary.dark,
    marginBottom: '0.5rem',
  },
  img: {
    borderRadius: '100px',
    border: '1px solid #3333335b',
    padding: '0.5rem',
    boxShadow:
      'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
  },
  btn: {
    borderRadius: '100px',
    padding: 0,
  },
}));
export default useStyles;
