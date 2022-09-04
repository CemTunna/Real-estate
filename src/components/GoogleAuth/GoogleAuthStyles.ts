import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  text: {
    letterSpacing: '0.5px',
    textTransform: 'capitalize',
    color: theme.palette.primary.dark,
    marginBottom: '0.5rem',
    fontWeight: 'bold',
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
    '&:hover': {
      boxShadow:
        'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
    },
  },
}));
export default useStyles;
