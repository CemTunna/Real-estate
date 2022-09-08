import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  main: {
    width: '100%',
  },
  label: {
    marginTop: '1rem',
    marginBottom: 0,
    color: theme.palette.primary.dark,
  },
  subFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    color: theme.palette.secondary.dark,
  },

  btnContainer: {
    display: 'flex',
    width: '50%',
  },
  input: {
    flex: 1,
  },
  textArea: {
    border: '1px solid #e74c0e',
    outline: 'none',
    padding: '1rem',
    flex: 1,
  },
  btn: {
    flex: 1,
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.light,
    margin: '0.5rem',
  },
  approveBtn: {
    flex: 1,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.light,
    margin: '0.5rem',
  },
  icon: {
    fontSize: 'medium',
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  subBodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
    flex: 1,
  },
}));
export default useStyles;
