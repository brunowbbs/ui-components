import { useFormik, FormikValues, FormikHelpers } from "formik";
import { ValidationError } from "yup";

type FormProps<T extends FormikValues> = {
  initialValues: T;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
  validationSchema?: any; // Alterado para aceitar qualquer tipo de schema do Yup
  validateOnChange?: boolean;
};

export function useForm<T extends FormikValues>({
  initialValues,
  onSubmit,
  validationSchema,
  validateOnChange = true,
}: FormProps<T>) {
  const validateForm = async (values: T) => {
    const errors: Record<string, string> = {};
    if (validationSchema) {
      try {
        await validationSchema.validate(values, { abortEarly: false });
      } catch (error) {
        if (error instanceof ValidationError) {
          error.inner.forEach((validationError) => {
            if (validationError.path) {
              errors[validationError.path] = validationError.message;
            } else {
              errors._error = validationError.message;
            }
          });
        }
      }
    }
    return errors;
  };

  const form = useFormik<T>({
    initialValues,
    onSubmit,
    validate: validateForm,
    validateOnChange: validateOnChange,
  });

  return {
    form,
  };
}
