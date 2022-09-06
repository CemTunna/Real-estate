import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  main: {
    width: '100%',
  },
  label: {
    marginTop: '1rem',
    marginBottom: 0,
  },
  subFormContainer: {
    margin: '1rem auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: '1rem',
    border: '3px solid blue',
  },
  textArea: {
    border: '1px solid #e74c0e',
    outline: 'none',
    padding: '0.375rem',
    maxWidth: '20rem',
  },
  btn: {
    width: '100%',
  },
  btnContainer: {
    display: 'flex',
  },
  icon: {
    fontSize: 'medium',
  },
}));
export default useStyles;
