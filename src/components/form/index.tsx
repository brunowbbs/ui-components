import { Formik } from "formik";
import * as Yup from "yup";

import {
  Button,
  Checkbox,
  Input,
  InputMask,
  RadioButtonGroup,
  RichText,
  Select,
} from "../../../lib";

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

const ValidationSchema = Yup.object().shape({
  name: Yup.string().min(3, "Nome inválido").required("Nome é obrigatório"),
  sexo: Yup.number().min(1, "Sexo é obrigatório"),
  cpf: Yup.string()
    .matches(cpfRegex, "CPF inválido")
    .required("CPF é obrigatório"),
  permanecer: Yup.boolean().oneOf([true], "Você precisa aceitar os termos"),
  linguagem: Yup.string().required("Linguagem é obrigatória"),
  observacao: Yup.string().required("Observação é obrigatória"),
});

export function Form() {
  return (
    <Formik
      initialValues={{
        name: "",
        sexo: 0,
        cpf: "",
        permanecer: false,
        linguagem: "",
        observacao: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, errors, setFieldValue, handleSubmit }) => (
        <>
          <div className="flex flex-col gap-3 mt-4">
            <Input
              value={values.name}
              label="Nome completo"
              placeholder="Informe o nome completo"
              onChangeValue={(value) => setFieldValue("name", value)}
              error={errors?.name}
            />
            <InputMask
              value={values.cpf}
              type="cpf"
              label="CPF"
              placeholder="000.000.000-00"
              onChangeValue={(value) => setFieldValue("cpf", value)}
              error={errors?.cpf}
            />
            <Select
              value={values.sexo}
              onChangeValue={(value) => setFieldValue("sexo", value.value)}
              placeholder="Selecione"
              label="Sexo"
              options={[
                { label: "Masculino", value: 1 },
                { label: "Feminino", value: 2 },
              ]}
              error={errors?.sexo}
            />
            <Checkbox
              value={values.permanecer}
              label="Aceitar termos"
              onChangeValue={(value) => setFieldValue("permanecer", value)}
              error={errors?.permanecer}
            />
            <RadioButtonGroup
              value={values.linguagem}
              label="Selecione a linguagem"
              onChangeValue={(value) => setFieldValue("linguagem", value)}
              options={[
                { label: "HTML", value: "option1" },
                { label: "CSS", value: "option2" },
                { label: "JavaScript", value: "option3" },
              ]}
              error={errors?.linguagem}
            />

            <RichText
              value={values.observacao}
              onChangeValue={(value) => setFieldValue("observacao", value)}
              label="Observação"
              error={errors?.observacao}
            />
          </div>
          <div className="mt-5 flex justify-end">
            <Button
              text="Salvar"
              type="submit"
              onClick={() => handleSubmit()}
            />
          </div>
        </>
      )}
    </Formik>
  );
}
