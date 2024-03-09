import { useFormik, FormikValues, FormikHelpers } from "formik";
import { ZodError } from "zod";
import { AnyZodObject } from "zod";

type FormProps<T extends FormikValues> = {
  initialValues: T;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void;
  validationSchema?: AnyZodObject;
};

export function useForm<T extends FormikValues>({
  initialValues,
  onSubmit,
  validationSchema,
}: FormProps<T>) {
  const validateForm = (values: T) => {
    const errors: Record<string, string> = {};
    if (validationSchema) {
      try {
        validationSchema.parse(values);
      } catch (error) {
        if (error instanceof ZodError) {
          error.errors.forEach((validationError) => {
            errors[validationError.path.join(".")] = validationError.message;
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
    validateOnChange: true,
  });

  return {
    form,
  };
}
