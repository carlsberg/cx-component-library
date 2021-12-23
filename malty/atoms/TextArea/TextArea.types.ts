export interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  value: string;
  label?: string;
  placeholder?: string;
  resize?: boolean;
  disabled?: boolean;
  onValueChange: (value: string) => void;
  error?: string;
  fullWidth?: boolean;
}
