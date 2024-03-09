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
  const { form } = useForm<{ name: string; sexo: number; cpf: string }>({
    initialValues: { name: "", sexo: 2, cpf: "11164846680" },
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <div>
      <div className="flex flex-col gap-3">
        <Input
          name="name"
          value={form.values.name}
          label="Nome completo"
          onChangeValue={(value) => form.setFieldValue("name", value)}
          error={"Campo obrigatório"}
        />
        <InputMask
          name="cpf"
          value={form.values.name}
          type="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          onChangeValue={(value) => form.setFieldValue("cpf", value)}
          error={"Campo obrigatório"}
        />
        <Select
          name="sexo"
          value={form.values.sexo}
          onChangeValue={(value) => form.setFieldValue("sexo", value)}
          placeholder="Selecione"
          label="Sexo"
          options={[
            { label: "Masculino", value: 1 },
            { label: "Feminino", value: 2 },
          ]}
          error={"Campo obrigatório"}
        />
        <Checkbox
          label="Permanecer conectado"
          onChangeValue={(value) => console.log(value)}
        />
        <RadioButtonGroup
          onChange={(value) => console.log(value)}
          options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
          ]}
        />
      </div>

      <Button text="Salvar" onClick={() => form.handleSubmit()} />
    </div>
  );
}
