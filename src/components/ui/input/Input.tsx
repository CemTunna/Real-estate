import { TextField } from '@mui/material';
import classNames from 'classnames';
import useStyles from './InputStyles';
import InputProps from './InputInterface';
const Input = ({
  className = '',
  onChange,
  value = '',
  placeholder = '',
  type = 'text',
  id = '',
  propss = {},
  autoFocus = false,
  required = false,
  disabled = false,
  maxLength = 20,
  minLength = 0,
  min = 0,
  max = 100,
  accept = '',
  multiple = false,
}: InputProps) => {
  const { classes } = useStyles();
  return (
    <TextField
      disabled={disabled}
      required={required}
      autoFocus={autoFocus}
      variant='standard'
      inputProps={{
        maxLength,
        minLength,
        min,
        max,
        accept,
        multiple,
      }}
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
