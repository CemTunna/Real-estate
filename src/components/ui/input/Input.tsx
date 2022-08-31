import { TextField } from '@mui/material';
import classNames from 'classnames';
import useStyles from './InputStyles';
import InputProps from './InputInterface';
const Input = ({
  className,
  onChange,
  value,
  placeholder,
  type,
  id,
  propss,
  autoFocus,
  required,
}: InputProps) => {
  const { classes } = useStyles();
  return (
    <TextField
      required={required}
      autoFocus={autoFocus}
      variant='standard'
      InputProps={{
        disableUnderline: true,
        ...propss,
      }}
      className={
        !className ? classes.input : classNames(className, classes.input)
      }
      onChange={onChange}
      placeholder={placeholder && placeholder}
      id={id}
      value={value}
      type={type}
    />
  );
};

export default Input;
