interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  placeholder?: string;
  type: string;
  id: string;
  className?: string;
  propss?: object;
  autoFocus?: boolean;
  required?: boolean;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  min?: number;
  max?: number;
  accept?: string;
  multiple?: boolean;
}
export default InputProps;
