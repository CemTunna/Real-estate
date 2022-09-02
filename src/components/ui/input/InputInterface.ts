interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  type: string;
  id: string;
  className?: string;
  propss?: object;
  autoFocus?: boolean;
  required?: boolean;
  disabled?: boolean;
}
export default InputProps;
