export type InputProps = {
  width?: number;
  label: string;
  type?: "money" | "phone" | "cpf" | "cnpj" | "cep";
  onChangeValue: (value: string) => void;
  error?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
};
