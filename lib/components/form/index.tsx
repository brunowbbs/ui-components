import { useFormik, FormikValues } from "formik";

type FormProps<T extends FormikValues> = {
  initialValues: T;
  onSubmit: (values: T) => void;
};

export function useForm<T extends FormikValues>({
  initialValues,
  onSubmit,
}: FormProps<T>) {
  const form = useFormik<T>({
    initialValues,
    onSubmit,
    validateOnChange: false,
  });

  return {
    form,
  };
}
