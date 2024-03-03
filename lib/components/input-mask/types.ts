export type InputProps = {
  width?: number;
  label: string;
  type?: "money" | "phone" | "cpf" | "cnpj";
} & React.InputHTMLAttributes<HTMLInputElement>;
