import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));
export default useStyles;
