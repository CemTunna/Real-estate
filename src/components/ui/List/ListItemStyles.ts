import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  item: {
    fontWeight: theme.typography.fontWeightBold,
    flex: 1,
    [theme.breakpoints.down('md')]: {
      border: ' 3px solid red',
    },
  },
}));

export default useStyles;
