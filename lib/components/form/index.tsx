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
    const errors: Record<string, string> = {};
    try {
      if (validationSchema) {
        const response = validationSchema.parse(values);

        console.log(">>>>>>>ZOD", response);
      }
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((validationError) => {
          errors[validationError.path.join(".")] = validationError.message;
        });
      } else {
        console.error("Error during schema validation:", error);
      }
    }

    console.log(errors);
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
