import React from "react";
import { Button } from "../button";

export const useForm = ({ initialValues, validationSchema, onSubmit }) => {
  const [formValues, setFormValues] = React.useState(initialValues);
  const [formErrors, setFormErrors] = React.useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      onSubmit(formValues);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (validationSchema) {
      for (let key in validationSchema) {
        if (validationSchema.hasOwnProperty(key)) {
          const validationFunction = validationSchema[key];
          const errorMessage = validationFunction(formValues[key]);
          if (errorMessage) {
            errors[key] = errorMessage;
          }
        }
      }
    }
    return errors;
  };

  return {
    Form: ({ children }) => (
      <form onSubmit={handleSubmit}>
        {React.Children.map(children, (child) => (
          <div>
            {React.cloneElement(child, {
              name: child.props.name,
              value: formValues[child.props.name] || "",
              onChange: handleChange,
            })}
            {formErrors[child.props.name] && (
              <span>{formErrors[child.props.name]}</span>
            )}
          </div>
        ))}
        <Button type="submit" text="Salvar" />
      </form>
    ),
  };
};
