import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  form: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  },
}));
export default useStyles;
