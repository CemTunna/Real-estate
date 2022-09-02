import { makeStyles } from 'tss-react/mui';
const useStyles = makeStyles()((theme) => ({
  btn: {
    color: theme.palette.primary.light,
    letterSpacing: '0.5px',
    border: '1px solid ',
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.main,
    textTransform: 'capitalize',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;
