import {
  Button,
  Checkbox,
  Input,
  InputMask,
  RadioButtonGroup,
  Select,
  useForm,
} from "../../../lib";

export function Form() {
  const { form } = useForm<{
    name: string;
    sexo: number;
    cpf: string;
    permanecer: boolean;
    linguagem: string | number;
  }>({
    // initialValues: {
    //   name: "Wesley Bruno Barbosa Silva",
    //   sexo: 2,
    //   cpf: "11164846680",
    //   permanecer: true,
    //   linguagem: "option1",
    // },
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
          onChangeValue={(value) => form.setFieldValue("sexo", value)}
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
          label="Permanecer conectado"
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
          error={form.errors?.name}
        />
      </div>

      <Button text="Salvar" onClick={() => form.handleSubmit()} />
    </div>
  );
}
