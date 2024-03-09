import { z } from "zod";

import {
  Button,
  Checkbox,
  Input,
  InputMask,
  RadioButtonGroup,
  Select,
  useForm,
} from "../../../lib";
import { useEffect } from "react";

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

const ValidationSchema = z.object({
  name: z
    .string()
    .min(3, "Username is too short")
    .max(50, "Username is too long")
    .min(1, "Username is required"),
  sexo: z.number().min(1, "Gender is required"),
  cpf: z
    .string()
    .min(1, "CPF is required")
    .refine((value) => cpfRegex.test(value), {
      message: "Invalid CPF format",
    }),
  permanecer: z.boolean().refine((value) => value === true, {
    message: "You must agree to continue",
  }),
  linguagem: z.string().min(1, "Language is required"),
});

export function Form() {
  const { form } = useForm<{
    name: string;
    sexo: number;
    cpf: string;
    permanecer: boolean;
    linguagem: string | number;
  }>({
    initialValues: {
      name: "",
      sexo: 0,
      cpf: "",
      permanecer: false,
      linguagem: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
    validationSchema: ValidationSchema,
  });

  useEffect(() => {
    console.log(form.errors);
  }, [form.errors]);

  return (
    <div>
      <div className="flex flex-col gap-3">
        <Input
          value={form.values.name}
          label="Nome completo"
          placeholder="Informe o nome completo"
          onChangeValue={(value) => form.setFieldValue("name", value)}
          error={form.errors?.name}
        />
        <InputMask
          value={form.values.cpf}
          type="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          onChangeValue={(value) => form.setFieldValue("cpf", value)}
          error={form.errors?.cpf}
        />
        <Select
          value={form.values.sexo}
          onChangeValue={(value) => form.setFieldValue("sexo", value.value)}
          placeholder="Selecione"
          label="Sexo"
          options={[
            { label: "Masculino", value: 1 },
            { label: "Feminino", value: 2 },
          ]}
          error={form.errors?.sexo}
        />
        <Checkbox
          value={form.values.permanecer}
          label="Aceitar termos"
          onChangeValue={(value) => form.setFieldValue("permanecer", value)}
          error={form.errors?.permanecer}
        />
        <RadioButtonGroup
          value={form.values.linguagem}
          label="Selecione a linguagem"
          onChange={(value) => form.setFieldValue("linguagem", value)}
          options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
          ]}
          error={form.errors?.linguagem}
        />
      </div>

      <Button text="Salvar" onClick={() => form.handleSubmit()} />
    </div>
  );
}
