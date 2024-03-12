import { useFormik, FormikValues, FormikHelpers } from "formik";
import { ZodError } from "zod";
import { AnyZodObject } from "zod";

type FormProps<T extends FormikValues> = {
  initialValues: T;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
  validationSchema?: AnyZodObject;
  validateOnChange?: boolean;
};

export function useForm<T extends FormikValues>({
  initialValues,
  onSubmit,
  validationSchema,
  validateOnChange = true,
}: FormProps<T>) {
  const validateForm = (values: T) => {
    console.log("MUDEI");
    const errors: Record<string, string> = {};
    if (validationSchema) {
      try {
        validationSchema.parse(values);
      } catch (error) {
        if (error instanceof ZodError) {
          error.errors.forEach((validationError) => {
            // Verifique se existe um path e adicione o erro ao objeto de erros
            if (validationError.path) {
              errors[validationError.path.join(".")] = validationError.message;
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
