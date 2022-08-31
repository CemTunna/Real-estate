interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  type: string;
  id: string;
  className?: string;
  propss?: any;
  autoFocus?: boolean;
  required?: boolean;
}
export default InputProps;
