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

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

const ValidationSchema = z.object({
  name: z.string().min(3, "Nome inválido").min(1, "Nome é obrigatório"),
  sexo: z.number().min(1, "Sexo é obrigatório"),
  cpf: z
    .string()
    .min(1, "CPF é obrigatório")
    .refine((value) => cpfRegex.test(value), {
      message: "CPF inválido",
    }),
  permanecer: z.boolean().refine((value) => value === true, {
    message: "Voce precisa aceitar os termos",
  }),
  linguagem: z.string().min(1, "Linguagem é obrigatória"),
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
      alert(JSON.stringify(values));
    },
    validationSchema: ValidationSchema,
  });

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
            { label: "HTML", value: "option1" },
            { label: "CSS", value: "option2" },
            { label: "JavaScript", value: "option3" },
          ]}
          error={form.errors?.linguagem}
        />
      </div>
      <div className="mt-5 flex justify-end">
        <Button
          text="Salvar"
          onClick={() => form.handleSubmit()}
          type="submit"
        />
      </div>
    </div>
  );
}
