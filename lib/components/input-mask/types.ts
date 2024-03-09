export type InputProps = {
  width?: number;
  label: string;
  type?: "money" | "phone" | "cpf" | "cnpj";
  onChangeValue: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
